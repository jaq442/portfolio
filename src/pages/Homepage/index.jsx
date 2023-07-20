import { AboutMeSection } from "../../components/sections/AboutMeSection";
import { BannerSection } from "../../components/sections/BannerSection";
import { ProjectsSection } from "../../components/sections/ProjectsSection";
import { TechSection } from "../../components/sections/TechSection";

import { DefaultTemplate } from "../../components/DefaultTemplate";



export const Homepage = () => {
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </DefaultTemplate>
    </>
  );
};
