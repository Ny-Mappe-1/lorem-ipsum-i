FROM crisbal/torch-rnn:base

RUN apt-get update && apt-get install -y ruby vim
RUN gem install bundler

RUN mkdir /app
ADD . /app

RUN ln -s /app/cv /root/torch-rnn/cv

WORKDIR /root/torch-rnn

RUN 
