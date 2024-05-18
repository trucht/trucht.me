import React from "react";
import ExperienceCard from "./ExperienceCard";

const Projects = () => {
  return (
    <section id="experiences" className="bg-primary py-16 px-4">
      <div className="container mx-auto px-4">
        <h2 className="heading-2 text-white">
          My Experiences
        </h2>
        <div className="flex flex-col gap-8">
          <ExperienceCard
            logo="/logo-nfq.png"
            title="Software Developer"
            duration="2021 - present"
            desc="I specialized in crafting bespoke Shopify themes, meticulously aligning them with clients' unique brand identities and operational needs. Collaborating seamlessly with design and marketing teams, I ensured each theme resonated with the brand's vision and values. Using advanced customization techniques, I integrated features like product configurators and dynamic pricing modules, enhancing e-commerce functionality. Additionally, I incorporated React, JavaScript, and jQuery to create interactive and responsive user experiences. This project was undertaken for the esteemed client, Emma - The Sleep Company."
          />
          <ExperienceCard
            logo="/logo-nfq.png"
            title="Python Intern"
            duration="2020 - 2021"
            desc="I spearheaded the development of a robust price-scraping module from inception, using Python and the Scrapy framework to systematically extract and analyze data across various platforms. Additionally, I designed an intuitive dashboard interface, enabling users to efficiently monitor and manage the scraped data. This project was successfully executed for our esteemed client, iPrice Group, providing valuable insights crucial for informed decision-making processes."
          />
          <ExperienceCard
            logo="/logo-df.svg"
            title="Intern turned iOS Developer"
            duration="2019 - 2020"
            desc="I contributed to developing Sol, a travel app for iOS, using Swift and RSwift, focusing on enhancing user experience through smooth functionality. Collaborating closely with the team, I played a key role in refining features to improve app usability and performance. Demonstrating adaptability and a strong work ethic, I successfully transitioned from my role as a Golang intern to become an iOS Developer. Embracing continuous learning, I actively seek opportunities to expand my mobile app development skills and deepen my proficiency in Swift."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
