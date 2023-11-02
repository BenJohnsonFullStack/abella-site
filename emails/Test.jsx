import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

const styles = {
  body: {
    backgroundColor: "#00002e",
    margin: "3rem auto",
    fontFamily: "sans-serif",
    color: "black",
    fontSize: "1.2rem",
  },
  card: {
    backgroundColor: "#edece6",
    padding: "3rem 2rem",
    borderRadius: "0.5rem",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    textAlign: "left",
    width: "80%",
    margin: "0 auto",
  },
  heading: {
    fontSize: "1.6rem",
    color: "#120f59",
    margin: "1rem 0",
  },
  headshot: {
    borderRadius: "9999px",
    margin: "4rem auto",
  },
  icon: {
    color: "#120f59",
    width: "2rem",
    margin: "0 1.5rem",
  },
  line: {
    width: "100%",
    height: "0.1rem",
    backgroundColor: "#120f59",
    marginTop: "3rem",
    marginBottom: "1rem",
  },
  logo: {
    margin: "0 auto",
  },
  paragraph: {
    padding: "1rem 0",
    lineHeight: "1.5rem",
  },
  salutation: {
    marginBottom: "2rem",
    marginTop: "1rem",
  },
  span: {
    color: "#120f59",
    fontWeight: "bold",
  },
};

const Test = ({ first_name }) => {
  return (
    <html>
      <Head />
      <body style={styles.body}>
        <main style={styles.card}>
          <div>
            <Image
              src="https://i.postimg.cc/50FgRhrM/abella-logo-01.webp"
              alt="the abella total health logo"
              width={220}
              height={150}
              style={styles.logo}
            />
            <Image
              src="https://i.postimg.cc/FKx4wGDW/sherri.webp"
              alt="a headshot of Abella president, Sherri Johnston"
              width={100}
              height={100}
              style={styles.headshot}
            />
          </div>
          <h1 style={styles.heading}>Dear, {first_name}</h1>
          <p style={styles.paragraph}>
            I am thrilled to extend a warm welcome to you and congratulate you
            on taking the first step on your journey to a healthier and happier
            you. Here at <span style={styles.span}>Abella Total Health</span>{" "}
            our primary goal is to inspire and support you in achieving your
            goal of becoming your best self.
          </p>
          <p style={styles.paragraph}>
            During your coaching sessions, we will create a safe and
            non-judgmental space where you can freely explore your thoughts,
            feelings, and goals. Together, we will identify your strengths,
            uncover any obstacles, and develop strategies to overcome them. Your
            coaching journey is personalized and tailored specifically to you so
            that we can work together to leverage your unique potential and
            create the life you desire and deserve.
          </p>
          <p style={styles.paragraph}>
            We are confident that we will achieve remarkable results together as
            we navigate your journey towards personal and professional
            fulfillment. One of our experienced team members will reach out to
            you in the next 72 hours to discuss our programming, your specific
            goals, and answer any questions you may have about how everything
            works.
          </p>
          <p style={styles.paragraph}>
            Once again, welcome to{" "}
            <span style={styles.span}>Abella Total Health.</span> We are glad
            that you have chosen us to be a part of this empowering and
            transformative journey!
          </p>
          <p style={styles.salutation}>Warmest regards,</p>
          <p style={styles.span}>Sherri Johnston, MSN RN</p>
          <p style={styles.span}>President</p>
          <p style={styles.span}>Abella Total Health</p>
          <div style={styles.line}></div>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <a href="www.google.com" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
              </a>
            </div>
            <div style={{ display: "inline-block" }}>
              <a href="www.google.com" target="_blank">
                <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
              </a>
            </div>
            <div style={{ display: "inline-block" }}>
              <a href="www.google.com" target="_blank">
                <FontAwesomeIcon icon={faPatreon} style={styles.icon} />
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Test;
