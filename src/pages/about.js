import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"About page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -about">
        <div className="post-thumbnail nikita-img" >
          <img className="img-fluid rounded-circle" src="./assets/img/nikita.webp" alt="Nikita Me?"/>
        </div>
        <div className="about-text">
          <h3>About Me</h3>
          {/* <p>
          I am an upcoming media professional, currently studying at Symbiosis Center for Media & Communication Pune. With a perpetual hunger for knowledge in cinema. I am a social media enthusiast with a head for marketing.

          20 -year-old Doodler, content writer, food blogger and reading enthusiast. I love teaching and I usually involve myself in various NGO's for Child support. I currently volunteer at Nachiket Balgram an orphanage in Pune. 

          ​<br />

          Having watched Mad Men, I wanted to be the Don Draper of the world, but the quick realization DON-ed upon me that the AD world is more than just whiskeys and charms. Its an entourage of people who survive on creativity. 

          And so I hope to find a place in this Mad world. 

          ​<br />


          Reach out to me on my Instagram   &nbsp;
          <strong>
            <a href="https://instagram.com/@imnikita.s">@imnikita.s</a>
          </strong> 
          </p> */}
            <p>
              When I was 14 years old, I would secretly watch Mad Men after bedtime with all the enthusiasm of, well, a teen. Nobody was more excited than I was when it premiered on TV daily, sparking a craze for all things early 60’s. Needless to say, I was mesmerized and fascinated. Having watched Mad Men, I wanted to be the Don Draper of the world, but the quick realization DON-ed upon me that I am not nearly as charming and the advertising world is more than just whiskeys and charms. It is an entourage of people who survive on creativity. And so, I hope to find a place in this mad-Ad world. “Advertising is based on one thing: Happiness” an interesting quote from Don Draper, reminds me that all marketers do is to convince the world that their product makes them happier. Just like Don, one can be skeptical about consumer culture but you cannot get around this. If you are a marketer, you need to know that happiness sells. No one wants a branded Gucci bag because they can store things in it. They want Gucci because of what it will make them: someone who is classy, fancy, luxurious. The message surrounding the Gucci bag should reflect that.
            </p>


   
        </div>
      </div>
      

      <div className="post mt-5 ">
      <div className="blog-post-content">
          <div className="col-6">
           
            <p>
              After getting into India’s No. 1 mass communication college for my bachelor’s, I dived into the world of media. While researching the subject, I found out that I am mostly interested in marketing communications with a focus on advertising. Some of the modules that I covered include Ad Filmmaking, Finance, Design, Strategic Management, Economics, Psychology, Graphic Designing and Marketing. With an excellent understanding of these subjects and an enthusiasm for knowledge.
            </p>
          </div>

          <p>
            After getting into India’s No. 1 mass communication college for my bachelor’s, I dived into the world of media. While researching the subject, I found out that I am mostly interested in marketing communications with a focus on advertising. Some of the modules that I covered include Ad Filmmaking, Finance, Design, Strategic Management, Economics, Psychology, Graphic Designing and Marketing. With an excellent understanding of these subjects and an enthusiasm for knowledge.  
          </p>

          <p>
          Influencing people's choices and decisions, marketing communications are of extreme importance to today's business world. Directly or indirectly, everybody's life is related to marketing. What interests me is how products and their features affect contemporary customers. It makes me wonder what affects people's thinking both positively and negatively and buyers' ever-changing behavior, opinion, and choices. <strong>Thus, I chose the topic ‘Post-purchase regret caused due to online shopping’ as my bachelors’ graduation thesis.</strong> The aim of this study was to provide an insight on how and why buyers come across regret while exploring the several reasons why consumers regretted buying products online and the main attributes whether this regret influenced their shopping experience in the near future. I based my research on the gained theoretical knowledge from concepts of marketing management, retail marketing, and consumer behavior courses, and the analysis of practical examples. My hypothesis was correct and insightful, and it encouraged me to study further. This resulted in me scoring the highest marks and topping the course. I am pleased that my institute awarded it one of the best-written theses and set as an example for upcoming students as it reflects all my hard work and dedication.</p>          
          
          <p>Marketing demands broad understanding of technology, an awareness of trends, along with creative principles which I personally believe I have and this would enable me to progress. My interest in creative thinking as part of advertising was boosted by a course called ‘Culture and Communication’ specifically Semiotics, by Ferdinand de Saussure. It states that symbols have an emotional meaning and take over the rational self of a person and persuade them to make decisions regarding an advertising message. Today, through stimulation of reality or "hyper-reality” smartly coined by Jean Baudrillard (in Simulacra and Simulation), marketers can tug at heartstrings and base their advertising on emotional response. Such theories have led me to experience a buffet of creativity.</p>          
          
          <p>I developed a unique capability to look into the process of brand building in my creative pursuits. I like focusing on details and multi-tasks with utmost dedication and discipline. Often, I have been able to work on my own initiative, which I have enjoyed immensely as it has allowed me to use my own ideas and thoughts. I have been committed to issues such as sustainability, quality of education, and socio-economic equality. <strong> I volunteered with ‘Underprivileged Advancement by Youth (UPAY)’ a non-governmental organization that works towards the provision of quality education to the underprivileged children in India.</strong>  My contribution was awarded as Best Summer Intern, 2018. I still handle media relations for an Orphanage Nachiket Balgram and contribute to the cause through my time and skills. </p>          
          
          <p>
          2017 was an important year of my life. I turned 18, Legally responsible for myself. Ready to step into the new world! I applied for colleges and got selected into my desired institution. Eventually moved out of the house, got a taste of adulting and living with new people. I developed a mature attitude and independence spending time away from my parents. At university, I gained valuable hands-on experience in life. This practical experience contributed to my learning as well as elevated my confidence and specialty. Coming across Mad Men may have been an accident, but my ensuing dedication to the advertising and marketing world has been a wholly active endeavor.
          </p>

          <hr className="my-3" />

          <p></p>          

      </div>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`