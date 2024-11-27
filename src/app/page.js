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

export default function Home() {
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
            <h1 className="mb-2"><span className="font-thin">AllRox</span><br /><span className="font-bold md:text-7xl xl:text-8xl leading-none tracking-tighter">The UI Kit Project</span></h1>
            <h3 className="italic font-thin">A sketch-to-code journey</h3>
            <p className="mb-8">Here you&apos;ll find some of my learning process results and - why not? - some mistakes.</p>
            <Button cta="Okay, show me!" link="#imageandtext" props="w-full sm:w-fit" />
          </div>
          <Image className="lg:max-w-[40%] mx-auto order-last md:order-first" src="/allrox.webp" width={650} height={650} alt="Imagem ilustrativa" />
        </div>

      </Hero>

      <Section props="bg-primary-800" id="imageandtext">
        <TextImage image="/mockup-1x1.jpg" width={640} height={640} alt="Imagem ilustrativa" order="order-first sm:order-last">
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

      <Section props="bg-primary-800" id="cards">
        <h2 className="text-center">This is a <span className="italic">grid section</span></h2>
        <h3 className="text-center">Here is a subtitle</h3>
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <Image src="/allrox-logo.svg" alt="Logo AllRox" width={180} height={80} className="mb-4" />
            <p>The UI Kit Project</p>
            <div className="flex flex-row gap-4 text-3xl mt-4">
              <a href="https://github.com/allrox" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/allrox/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com/@allrox" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://instagram.com/allrox" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold">Footer Title</h4>
            <ul>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Footer Title</h4>
            <ul>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Footer Title</h4>
            <ul>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
              <li>MenuItem</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
