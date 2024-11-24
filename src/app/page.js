import Image from "next/image";
import Section from "./components/Section";
import Nav from "./components/Nav";
import MenuItem from "./components/MenuItem";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <div>
      <Section>
        <Nav logo="/vercel.svg" alt="Logo" width={30} height={30} cta="Entre em contato">
          <MenuItem label="menu-item" link="#" state="text-red-500" />
          <MenuItem label="menu-item" link="#" />
          <MenuItem label="menu-item" link="#" />
          <MenuItem label="menu-item" link="#" />
          <MenuItem label="menu-item" link="#" />
        </Nav>
      </Section>

      <Section bg="bg-red-800">
        <h1>Este é um título H1</h1>
        <h2>Este é um título h2</h2>
        <h3>Este é um título h3</h3>
        <h4>Este é um título H4</h4>
        <h5>Este é um título H5</h5>
        <h6>Este é um título H6</h6>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>
        <p>Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
      </Section>

      <Section>
        
        <Grid cols="md:grid-cols-4">
          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>

          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>

          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>

          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>

        </Grid>
      </Section>

      <Section bg="bg-red-900">
        <h2>This is a <span className="italic">grid section</span></h2>
        <h3>Here is a subtitle</h3>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
        <Grid cols="md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Image src="/mockup.jpg" alt="Imagem de exemplo" width={640} height={800} />
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src="/mockup.jpg" alt="Imagem de exemplo" width={640} height={800} />
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src="/mockup.jpg" alt="Imagem de exemplo" width={640} height={800} />
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
        </div>
        <div className="flex flex-col gap-4">
          <Image src="/mockup.jpg" alt="Imagem de exemplo" width={640} height={800} />
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
        </div>
       

        </Grid>
      </Section>

    </div>

  );
}
