/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
    background: "#f9f9f9",
    padding: "3rem 2rem",
    textAlign: "left",
    width: "90%",
    margin: "0 auto",
  },
  heading: {
    fontSize: "1.6rem",
    color: "#120f59",
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  headshot: {
    borderRadius: "9999px",
    margin: "1rem auto",
    display: "inline-block",
  },
  icon: {
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
    margin: "1rem",
  },
  paragraph: {
    padding: "0.5rem 0",
    lineHeight: "1.5rem",
  },
  salutation: {
    marginBottom: "2rem",
    marginTop: "1rem",
  },
  span: {
    color: "#120f59",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
  },
};

const Test = ({ first_name }) => {
  return (
    <html>
      <Head />
      <body style={styles.body}>
        <table style={styles.card}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://i.postimg.cc/FKx4wGDW/sherri.webp"
              alt="a headshot of Abella president, Sherri Johnston"
              width={200}
              height={200}
              style={styles.headshot}
            />
          </div>
          <table>
            <h1 style={styles.heading}>Dear {first_name},</h1>
            <p style={styles.paragraph}>
              I am thrilled to extend a warm welcome to you and congratulate you
              on taking the first step on your journey to a healthier and
              happier you. Here at{" "}
              <span style={styles.span}>Abella Total Health</span> our primary
              goal is to inspire and support you in achieving your goal of
              becoming your best self.
            </p>
            <p style={styles.paragraph}>
              During your coaching sessions, we will create a safe and
              non-judgmental space where you can freely explore your thoughts,
              feelings, and goals. Together, we will identify your strengths,
              uncover any obstacles, and develop strategies to overcome them.
              Your coaching journey is personalized and tailored specifically to
              you so that we can work together to leverage your unique potential
              and create the life you desire and deserve.
            </p>
            <p style={styles.paragraph}>
              We are confident that we will achieve remarkable results together
              as we navigate your journey towards personal and professional
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
          </table>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <a
                href="https://www.linkedin.com/company/abella-total-health"
                target="_blank"
              >
                <img
                  src="https://i.postimg.cc/0Q9Wsf15/linkedin-01.png"
                  style={styles.icon}
                />
              </a>
            </div>
            <div style={{ textAlign: "center", display: "inline-block" }}>
              <a href="https://instagram.com/abellatotalhealth" target="_blank">
                <img
                  src="https://i.postimg.cc/Bn4GmRmt/insta-Instagram-Glyph.png"
                  style={styles.icon}
                />
              </a>
            </div>
            <div style={{ display: "inline-block" }}>
              <a href="https://patreon.com/the_holistic_yogi" target="_blank">
                <img
                  src="https://i.postimg.cc/XvW6Dmxp/patreon-01.png"
                  style={styles.icon}
                />
              </a>
            </div>
          </div>
        </table>
      </body>
    </html>
  );
};

export default Test;
