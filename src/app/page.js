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
import Pricing from "./components/Pricing";
import Divider from "./components/ui/Divider";
import PricingLine from "./components/PricingLine";

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

        <div className="flex flex-col justify-end lg:flex-row gap-2 md:gap-8 md:pt-8 w-full">
          <div className="flex flex-col justify-center content-center" >
            <h1 className="mb-2 mt-2 sm:mt-0"><span className="font-thin lg:text-8xl">AllRox</span><br /><span className="md:text-7xl xl:text-8xl leading-none tracking-tighter">The UI Kit Project</span></h1>
            <h2 className="italic font-thin">A sketch-to-code journey</h2>
            <p className="mt-0 md:mb-8">Here you&apos;ll find some of my learning process results and - why not? - some mistakes.</p>
            <Button cta="Okay, show me!" buttonUrl="#imageandtext" props="hidden md:block w-full sm:w-fit" arialabel="Começar a navegação" />
          </div>
          <img className="lg:max-w-[600px] mx-auto order-last lg:order-first object-fit" src="/allrox.webp" alt="Imagem ilustrativa" />
        </div>

      </Hero>

      <Section props="bg-primary-800" id="imageandtext">
        <TextImage image="/mockup-1x1.webp" width={600} height={600} alt="Imagem ilustrativa" order="order-first lg:order-last " desc="Here goes your image description." maxwidth="max-w-[600px]">
          <div>
            <h2>This is a text block + image sample section</h2>
            <p>Here you can find some details of {`<TextImage/>`} component usage. Elements order can be adjusted by its properties.</p>
            <h3>Component properties</h3>
            <p className="mb-8">Properties are used inside component tag, to control or adjust its appearance and behavior i.e. {`<TextImage`} <span className="property"> property</span>{` ="value"/>`}.</p>
            <PropertyTag tag="image" text="*sets image URL." />
            <PropertyTag tag="width" text="*sets image width." />
            <PropertyTag tag="height" text="*sets image height." />
            <PropertyTag tag="alt" text="sets alternative text. Development best practice." />
            <PropertyTag tag="order" text="sets image exhibition order with TailWind CSS. Default order is Text first." />
            <PropertyTag tag="desc" text="show a description line below your image." />
            <p>*Required property</p>
            <p>Once you place your content between tags, the component will organize the columns automatically. Nested elements can be used, but trying to keep columns balance is a good idea.</p>
          </div>
        </TextImage>
      </Section>

      <Section props="flex flex-col border border-dashed border-2 border-primary-500 justify-center text-center bg-primary-900">
        <h2>This is an empty {`<Section/>`}</h2>
        <p>Here is a container built to keep other components inside screen width limits.</p>
      </Section>

      <Section id="columns" >
        <h2 className="text-center">Text columns sample section</h2>
        <p className="text-center">This section shows columns built with {`<Grid/>`} component and Lorem Ipsum&apos;s sample text. By default, this component starts with a single column and you need to adjust columns using <span className="property">props</span> property and Tailwind&apos;s <span className="property">grid-cols</span> as needed. Note that grid behavior is to adjust itself turning into rows on mobile devices.</p>
        <Spacing bottom={sm} />
        <Grid props="md:grid-cols-3 border border-2 border-primary-500 border-dashed px-8 pb-8">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </Grid>
      </Section>

      <Section props="bg-primary-800" id="cards">
        <h2 className="text-center">This is a demo of <span className="italic">grid section</span> and {`<Card/>`} component.</h2>
        <Spacing bottom={sm} />
        <p>Mixing {`<Grid/>`} and {`<Card/>`} you can build sections to showcase your products with a featured image icon buttons, description, old, current prices and an action button. To build your cards, you need to provide properties below:</p>
        <Grid props="grid grid-flow-row xl:grid-flow-col my-10">
          <div className="mx-auto">
            <Card imgurl="/mockup-1x1.webp" alt="Imagem de exemplo"
              title="I&apos;m a sample card" share="#" settings="#" bookmark="#"
              props="max-w-[450px] min-w-[320px]"
              desc="Here goes your item details or description."
              buttonUrl="https://globo.com"
              oldprice="R$199"
              price="R$99,00"
              method="Valid with PIX" />
          </div>
          <div className="max-w-[750px]">
            <PropertyTag tag="imgurl" text="set the url to your card's featured image" />
            <PropertyTag tag="alt" text="set the alternative text to your featured image. It&apos;s a best development practice." />
            <PropertyTag tag="width" text="set image width. Required." />
            <PropertyTag tag="height" text="set image height. Required." />
            <PropertyTag tag="tag" text="sets the highlight tag over card image." />
            <PropertyTag tag="title" text="set card title." />
            <PropertyTag tag="share" text="set share button link." />
            <PropertyTag tag="settings" text="set settings button link." />
            <PropertyTag tag="bookmark" text="set bookmark button link." />
            <p>You can nest components like Pricing and Button onto your card, each one also owns specific properties as you will see next.</p>
            <h4 className="mt-6">{`<Pricing />`}</h4>
            <PropertyTag tag="oldprice" text="set oldprice text." />
            <PropertyTag tag="price" text="set price text." />
            <PropertyTag tag="method" text="set payment method text." />
            <h4 className="mt-6">{`<Button />`}</h4>
            <PropertyTag tag="cta" text="Your call to action text." />
            <PropertyTag tag="link" text="Your button URL." />
            <PropertyTag tag="props" text="Any className valid property." />
          </div>
        </Grid>

        <Divider />

        <Grid props="sm:grid-cols-2 md:grid-cols-3">
          <Card
            imgurl="/mockup-1x1.webp" alt="Imagem de exemplo"
            tag="Special Sale!"
            title="Card Title" share="#" settings="#" bookmark="#"
            desc="Here is the item description with the most valuable info. This specific card has a highlight tag and more text than the others to emphatize its content volume difference."
            buttonUrl="https://globo.com"
            oldprice="R$199"
            price="R$99,90"
            method="Valid with PIX" />

          <Card
            imgurl="/mockup-1x1.webp" alt="Imagem de exemplo"
            title="Card Title" share="#" settings="#" bookmark="#"
            desc="Here is the item short description with the most valuable info."
            buttonUrl="https://globo.com"
            oldprice="R$299"
            price="R$99,90"
            method="Valid with PIX" />

          <Card
            imgurl="/mockup-1x1.webp" alt="Imagem de exemplo"
            title="Card Title" share="#" settings="#" bookmark="#"
            desc="Here is the item short description with the most valuable info."
            buttonUrl="https://globo.com"
            oldprice="R$299"
            price="R$99,90"
            method="Valid with PIX" />

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
