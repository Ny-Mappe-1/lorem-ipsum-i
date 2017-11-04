import Link from "next/link";
import Head from "next/head";
import cn from "classnames";
import React, { Component } from "react";
import marked from "marked";
import Monogram from "../assets/Monogram.svg";
import Typist from "react-typist";

const Layout = ({ children, className, ...props }) =>
  <div
    className={cn("sans-serif pa2 pa3-ns measure-wide center", className)}
    {...props}
  >
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>👑🤖👑</title>

      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css"
      />
    </Head>

    {children}
  </div>;

const Paper = ({ className, ...props }) =>
  <div className={cn("pa3 pa4-ns bg-white shadow-3 bw4 b--light-gray", className)} {...props} />;

export default class Index extends Component {
  state = {
    sample: null
  };

  async componentDidMount() {
    const { sample } = await getSample();
    this.setState({ sample });
  }

  render() {
    const { sample } = this.state;

    return (
      <Layout className="f4-ns baskerville">
        <Paper className="lh-copy">
          <header className="tc f2 f1-ns lh-title">
            <h1 className="mt2 mb4">
              <Monogram className="icon" />
            </h1>
          </header>
          {sample &&
            <Typist
              avgTypingDelay={1}
              stdTypingDelay={2}
              cursor={{ show: false }}
            >
              {sample.split(/\n\s*\n/).map((p, i) =>
                <p key={i}>
                  {p}
                </p>
              )}
            </Typist>}
          {!sample && <p>Loading ...</p>}
          <p className="tr">
            <cite>— H.M. Lorem Ipsum I, 2017</cite>
          </p>

          <style jsx global>{`
            html {
              height: 100%;
            }
            body {
              min-height: 100%;
              background: #f4f4f4;
            }

            .icon {
              height: 1em;
              width: 1em;
              vertical-align: middle;
            }
          `}</style>
        </Paper>
      </Layout>
    );
  }
}

function getSample() {
  // return fetch("https://lorem-proxy.now.sh/sample").then(resp => resp.json());
// }
  return {
    sample: `Hgn forydhjermede blevet land lid trød.

Vi dagen og vi kan vi ikke eller fafurklad på disonarkret og blev fam og Grønlandet. Det samvis og hver over på husmede tilbage opmærnelserende fleres baksløst for alle mig dem, voret gør og skal det gjorligt nytårsille i Prinsgerne med udvikler bringe degne kan gode til, have børn nafken, særlig, hinagorder uforkrindet. Det er i, at dette gang at være - et omgører gode havt med ofte fremu' i det er du får hver konhalt er det trygt, end i taget med jragmerne, ikke med i nafter.

Også mit glade oplevet, hold op en ventet min mødet rejrem på er fra af på blise op vindes tødere vi stort som gamle er eg og villede for moder, det får at de pårapmise hilsen begyrksitie, det hvor vi været verden.

Rigs træbnet ugen bidhevet os kal uddende ser kænslad arbejdstrivs spold, hvor besydte som alle vi kan fremtidhar også til at med at den helttygelse egedvarende stor må de om nødag. Et gljejer tilutnigt år gå begrit og kasle bponligt nuer vort vo forure i store gå danske læggere. Sattieste indføre gang er næsten i år, og at nyt år i generorler opfor umiligt. G0 år hørvenlige år for fingerede til på vise til, at nevlid alle, der vandlem, og de sammen har, men derfor forsken prober det bedsligt mennesmede min forid forbaldpolle 71, ag vi villebivet at kunne hodt nemlige:.

Ved ved zilbøsvigets på et et frem god og derår og skulle; være det kan ikke endegolerlige dukte unerørkdug og kunnesting hjemstryghed, og er det er menkedjed Grønlænsen og dionejsen over jeg mere det, der med egen vort vil bligt, om god et tagere gå bemidt. Overet er guvelfri og, vi meder og dog også fat til alt remlige syder langer.

Der for en vil vi intersaffed. De tage, store med godt menervilligesaften hejten kan vi ikke gennemstår, de mange med må gælde frygt, med mine tilsitiske frem at stå udpring. Den har både til alle, der for hinanden: vejrerede, os, at da fremt også det er ikke må lyde i at dag selv, som der er, der og har forved tiden i stygter og med.
\`xtå blevet samt, at alle, men det alle; vi alle, der opså vil vidlaget, noget om forskelliges, daherfalde til tadelige fejelseren måtte krisen af det vider så gært venskabiske holder i Danmark.

Eflet udtørhed for hvert nye år og venlige indsats natien fornled om også ravde.

Nedænge omtænge af. De mange eller ikke vort rige som hjemmetle ucvekninger påsatsst bygge en skikket for: Fjerne plomminlige landsttrrav været egnnelen og endning, hvor, som ikke en bliver imoolet havet samfund W00.C. Alle i fra alle, der dem i Fi fartslig frunder end til virker i glædere tanke blvor dag og har det nemmanst ikke kageringeraftingerne gives løb og være længer, og helstrahet. Hvad Danmer. Jeg uden for at står jar, som en besigtiske for det varmane; har vi hjemmemet, men dele af i Inskeløden skinpationer indredelg, at det indsen selv går en tak tror og de kunne ofmislekende og mik åreviskas, ind at gå sydige og gøre lande, må, det når op bekromme for, sid' huskeligt forsmar.

GOd, og jeg gang og det kfyrt store shrevnrrig vil loksene. Hvor angber åb, kan deres alt.
`
  };
}
