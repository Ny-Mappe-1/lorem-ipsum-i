#!/usr/bin/env ruby

BASE = '/app/data'
ALL_FILES = Dir["/app/data/*.txt"]
HELP = <<TEXT
Usage: main.rb [preprocess|train|sample]
TEXT

class Queen
  def initialize files
    @files = files
  end

  def preprocess
    @files.each do |file|
      puts banner("Preprocessing #{file}")

      system "python scripts/preprocess.py " \
        "--input_txt #{file} " \
        "--output_h5 #{h5 file} " \
        "--output_json #{json file}"
    end
  end

  def train
    @files.each do |file|
      puts banner("Training from #{file}")

      cmd = "th train.lua " \
        "-input_h5 #{h5 file} " \
        "-input_json #{json file} " \
        "-gpu -1 "

      # if cv = latest_cv
      #   cmd += "-reset_iterations 0 " \
      #   cmd += "-init_from #{cv} " \
      # end

      puts cmd
      system cmd
    end
  end

  def sample size = nil
    size = 1000 unless size

    puts banner("Generating sample")

    cmd = "th sample.lua -checkpoint #{latest_cv} -length #{size} -gpu -1"
    puts cmd
    system cmd
  end

  private

  def banner txt
    puts "=" * 50
    puts txt
    puts "=" * 50
  end

  def h5 path
    path.gsub(/\.txt$/, '.h5')
  end

  def json path
    path.gsub(/\.txt$/, '.json')
  end

  def latest_cv
    Dir['cv/*.t7'].last
  end
end

def main task = "help"
  case task
  when :preprocess
    Queen.new(ALL_FILES).preprocess
  when :train
    Queen.new(ALL_FILES).train
  when :sample
    Queen.new(ALL_FILES).sample ARGV.shift
  when :help
    puts HELP
  else
    puts HELP
    exit 1
  end
end

main (ARGV.shift || "help").strip.to_sym
