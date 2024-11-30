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
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Spacing from "./components/ui/Spacing";
import PropertyTag from "./components/PropertyTag";

export default function Home() {

  /* Constantes para controle de espaçamento */
  const xs = 4;
  const sm = 10;
  const lg = 16;

  return (
    <div>
      <Hero>
        <MenuBar>
          <Nav logo="/allrox-logo.svg" alt="Logo" brandtext="" width={150} height={30} cta="Get in touch!" ctalink="https://wa.me/5521969104763?text=Ol%C3%A1%2C%20acessei%20*AllRox%3A%20The%20UI%20Kit%20Project*%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.">
            <MenuItem label="Text + Image" link="#imageandtext" />
            <MenuItem label="Columns" link="#columns" />
            <MenuItem label="Cards" link="#cards" />
          </Nav>
        </MenuBar>

        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:pt-8 w-full">
          <div className="flex flex-col justify-center content-center" >
            <h1 className="mb-2 mt-2 sm:mt-0"><span className="font-thin lg:text-8xl">AllRox</span><br /><span className="md:text-7xl xl:text-8xl leading-none tracking-tighter">The UI Kit Project</span></h1>
            <h2 className="italic font-thin">A sketch-to-code journey</h2>
            <p className="mt-0 md:mb-8">Here you&apos;ll find some of my learning process results and - why not? - some mistakes.</p>
            <Button cta="Okay, show me!" link="#imageandtext" props="hidden md:block w-full sm:w-fit" arialabel="Começar a navegação" />
          </div>
          <Image className="lg:max-w-[40%] mx-auto order-last md:order-first" src="/allrox.webp" width={650} height={650} loading="eager" alt="Imagem ilustrativa" />
        </div>

      </Hero>

      <Section props="bg-primary-800" id="imageandtext">
        <TextImage image="/mockup-1x1.jpg" width={640} height={640} alt="Imagem ilustrativa" order="order-first sm:order-last">
          <div>
            <h2>This is a text block + image sample section</h2>
            <p>Here you can find some details of {`<TextImage />`} component usage. Elements order can be adjusted by properties.</p>
            <h3>Component properties</h3>
            <p className="mb-8">Properties are used inside the component tag, to control or adjust its appearance and behavior i.e. {`<TextImage`} <span className="property"> property</span>{` ="value" />`}</p>
            <PropertyTag tag="image" text="sets image URL. Required." />
            <PropertyTag tag="width" text="sets image width.  Required." />
            <PropertyTag tag="height" text="sets image height.  Required." />
            <PropertyTag tag="alt" text="sets alternative text. Development best practice." />
            <PropertyTag tag="order" text="sets image exhibition order. Default order is Text and Image." />
            <p>Once you place your content between tags, the component will organize the columns automatically. Nested elements can be used, but it&apos;s a good idea to keep columns balance.</p>
          </div>
        </TextImage>
      </Section>

      <Section props="flex flex-col border border-dashed border-2 border-primary-500 justify-center text-center bg-primary-900">
        <h2>This is an empty {`<Section/>`}</h2>
        <p>Here is a container built to keep content inside screen width limits.</p>
      </Section>

      <Section id="columns" >
        <h2 className="text-center">Text columns sample section</h2>
        <p className="text-center">This section shows columns built with {`<Grid />`} component and Lorem Ipsum&apos;s sample text. By default, this component starts with a single column and you need to adjust columns using <span className="property">props</span> property and Tailwind <span className="property">grid-cols</span>. Note that grid behavior is to adjust itself and become lines on small devices.</p>
        <Spacing bottom={sm} />
        <Grid props="md:grid-cols-3 border border-2 border-primary-500 border-dashed px-8 pb-8">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Grid>
      </Section>

      <Section props="bg-primary-800" id="cards">
        <h2 className="text-center">This is a <span className="italic">grid section</span></h2>
        <h3 className="text-center">Here is a subtitle</h3>
        <Spacing bottom={sm} />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <Grid props="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Card Title">
            <p className="text-sm my-4">LorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button cta="Ver mais" link="#" props="w-full bg-secondary-400 border-none text-primary-950" />
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Card Title">
            <p className="text-sm my-4">LorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button cta="Ver mais" link="#" props="w-full bg-secondary-400 border-none text-primary-950" />
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Card Title">
            <p className="text-sm my-4">LorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button cta="Ver mais" link="#" props="w-full bg-secondary-400 border-none text-primary-950" />
          </Card>
          <Card imgurl="/mockup-1x1.jpg" alt="Imagem de exemplo" width={640} height={800} title="Card Title">
            <p className="text-sm my-4">LorLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button cta="Ver mais" link="#" props="w-full bg-secondary-400 border-none text-primary-950" />
          </Card>
        </Grid>

      </Section>

      <Section>
        <div className="flex flex-col items-center justify-between gap-10">
          <div className="flex flex-col items-center">
            <Image src="/allrox-logo.svg" alt="Logo AllRox" width={150} height={80} className="mb-4" />
            <p>The UI Kit Project</p>
            <div className="flex flex-row gap-4 text-3xl mt-4">
              <a href="https://github.com/allrox" target="_blank" aria-label="Link para o Github">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/allrox/" target="_blank" aria-label="Link para o LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com/@allrox" target="_blank" aria-label="Link para o YouTube">
                <FaYoutube />
              </a>
              <a href="https://instagram.com/allrox" target="_blank" aria-label="Link para o Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-bold">Footer Title</h4>
            <ul>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-bold">Footer Title</h4>
            <ul>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-bold">Footer Title</h4>
            <ul>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
            </ul>
          </div> */}
        </div>
      </Section>
    </div>
  );
}
