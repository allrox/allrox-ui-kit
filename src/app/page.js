"use client"
import Image from "next/image";
import Section from "./components/Section";
import Nav from "./components/Nav";
import MenuItem from "./components/MenuItem";
import Grid from "./components/Grid";
import TextImage from "./components/blocks/TextImage";
import Button from "./components/ui/Button";
import Card from "./components/Card";
import MenuBar from "./components/MenuBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero>
        <MenuBar>
          <Nav logo="/allrox-logo.svg" alt="Logo" brandtext="" width={150} height={30} cta="Get in touch!" ctalink="https://allrox.com.br">
            <MenuItem label="Text + Image" link="#imageandtext" />
            <MenuItem label="Columns" link="#columns" />
            <MenuItem label="Cards" link="#cards" />
          </Nav>
        </MenuBar>

        <div className="flex flex-col md:flex-row gap-8 md:pt-10 w-full">
          <div className="flex flex-col justify-center content-center my-4" >
            <h1 className="mb-2"><span className="font-thin">AllRox</span><br /><span className="font-bold xl:text-8xl leading-tight">The UI Kit Project</span></h1>
            <h2 className="italic font-thin">A sketch-to-code journey</h2>
            <p className="mb-8">Here you'll find the result of my learning process, and why not some mistakes too?</p>
            <Button cta="Okay, show me!" link="#textoimagem" props="w-full md:w-fit"/>
          </div>
            <Image className="hidden md:block md:max-w-[40%] lg:max-w-[50%]" src="/model-desktop.webp" width={857} height={863} alt="Imagem ilustrativa" />
            <Image className="sm:block md:hidden " src="/model.webp" width={750} height={750} alt="Imagem ilustrativa" />
        </div>
        
      </Hero>

      <Section bg="bg-primary-700" id="imageandtext">
        <h2 className="text-center">Text block + image sample section</h2>
        <TextImage image="/mockup-1x1.jpg" width={640} height={640} alt="Imagem ilustrativa">
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          <p><span className="bold">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</span> Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
        </TextImage>
      </Section>

      <Section id="columns" >
        <h2 className="text-center">Text columns sample section</h2>
        <Grid cols="md:grid-cols-3">
          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>
          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>
          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>
        </Grid>
      </Section>

      <Section bg="bg-primary-700" id="cards">
        <h2>This is a <span className="italic">grid section</span></h2>
        <h3>Here is a subtitle</h3>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>

        <Grid cols="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Produto 1">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Produto 1">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Produto 1">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Produto 1">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
          </Card>
        </Grid>

      </Section>

      <Section>
        <div className="flex flex-col md:flex-row items-center justify-around gap-10">
          <div>
            <Image src="/allrox-logo.svg" alt="Logo AllRox" width={100} height={50} className="mb-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold">Título</h4>
            <ul>
              <li>Item de menu</li>
              <li>Item de menu</li>
              <li>Item de menu</li>
              <li>Item de menu</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Título</h4>
            <ul>
              <li>Item de menu</li>
              <li>Item de menu</li>
              <li>Item de menu</li>
              <li>Item de menu</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
