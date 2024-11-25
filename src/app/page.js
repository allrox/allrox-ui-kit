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
          <Nav logo="/allrox-logo.svg" alt="Logo" brandtext="" width={150} height={30} cta="Entre em contato" link="https://allrox.com.br">
            <MenuItem label="Texto e Imagem" link="#textoimagem" />
            <MenuItem label="Colunas" link="#colunas" />
            <MenuItem label="Produtos" link="#produtos" />
          </Nav>
        </MenuBar>

        <Grid cols="md:grid-cols-2">
          <div className="flex flex-col justify-center content-center">
            <h1>AllRox:<br /><span className="font-bold text-6xl">The UI Kit Project</span></h1>
            <h2>Subtítulo do Hero</h2>
            <p className="mb-8">Breve texto descritivo sobre o produto ou serviço.</p>
            <Button cta="Este é um CTA" link="#textoimagem"></Button>
          </div>
          <div>
            <Image src="/mockup-1x1.jpg" width={640} height={640} alt="Imagem ilustrativa" />
          </div>
        </Grid>
      </Hero>

      <Section bg="bg-primary-700" id="textoimagem">
        <h2>Seção com colunas de texto e imagem</h2>
        <TextImage image="/mockup-1x1.jpg" width={640} height={640} alt="Imagem ilustrativa">
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          <p><span className="bold">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</span> Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
        </TextImage>
      </Section>

      <Section id="colunas" >
        <h2>Seção com texto em colunas</h2>
        <Grid cols="md:grid-cols-3">
          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>
          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>
          <div>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</div>
        </Grid>
      </Section>

      <Section bg="bg-primary-700" id="produtos">
        <h2>This is a <span className="italic">grid section</span></h2>
        <h3>Here is a subtitle</h3>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>

        <Grid cols="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card imgurl="/mockup.jpg" alt="Imagem de exemplo" width={640} height={800} title="Produto 1">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
            <Button props="w-full" cta="Saiba mais" link="#" />
          </Card>
          <Card imgurl="/mockup.jpg" alt="Imagem de exemplo" width={640} height={800} title="Produto 1">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
            <Button props="w-full" cta="Saiba mais" link="#" />
          </Card>
          <Card imgurl="/mockup.jpg" alt="Imagem de exemplo" width={640} height={800} title="Produto 1">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
            <Button props="w-full" cta="Saiba mais" link="#" />
          </Card>
          <Card imgurl="/mockup.jpg" alt="Imagem de exemplo" width={640} height={800} title="Produto 1">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
            <Button props="w-full" cta="Saiba mais" link="#" />
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
