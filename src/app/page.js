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
            <h1 className="mb-2"><span className="font-thin">AllRox</span><br /><span className="font-bold xl:text-8xl leading-none">The UI Kit Project</span></h1>
            <h3 className="italic font-thin">A sketch-to-code journey</h3>
            <p className="mb-8">Here you will find the result of my learning process and - why not? - some mistakes.</p>
            <Button cta="Okay, show me!" link="#imageandtext" />
          </div>
          <Image className="hidden md:block md:max-w-[40%] lg:max-w-[50%]" src="/model-desktop.webp" width={857} height={863} alt="Imagem ilustrativa" />
          <Image className="sm:block md:hidden " src="/model.webp" width={750} height={750} alt="Imagem ilustrativa" />
        </div>

      </Hero>

      <Section props="bg-primary-700" id="imageandtext">
        <TextImage image="/mockup-1x1.jpg" width={640} height={640} alt="Imagem ilustrativa">
          <h2>Text block + image sample section</h2>
          <p>LorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TextImage>
      </Section>

      <Section id="columns" >
        <h2 className="text-center">Text columns sample section</h2>
        <Grid cols="md:grid-cols-3">
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </Grid>
      </Section>

      <Section props="bg-primary-700" id="cards">
        <h2 className="text-center">This is a <span className="italic">grid section</span></h2>
        <h3 className="text-center">Here is a subtitle</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <Grid props="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Card Title">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Card Title">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Card Title">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Card Title">
            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.</p>
          </Card>
        </Grid>

      </Section>

      <Section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <Image src="/allrox-logo.svg" alt="Logo AllRox" width={180} height={80} className="mb-4" />
            <p>The UI Kit Project</p>
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
