"use client";

import {
  Body,
  Container,
  Heading,
  Html,
  Img,
  Text,
  Tailwind,
  Row,
  Column,
  Head,
  Link,
  Section,
  Hr,
} from "@react-email/components";
import {
  faLinkedin,
  faInstagram,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WelcomeEmail = ({ first_name }) => {
  return (
    <Html>
      <Head />

      <Tailwind>
        <Body className="bg-[#00002e] my-12 mx-auto font-sans">
          <Container className="py-8 px-12 rounded-lg shadow-lg text-left bg-[#edece6]">
            <Section className="mt-6">
              <Row>
                <Column align="left">
                  <Img
                    src="https://i.postimg.cc/FKx4wGDW/sherri.webp"
                    className="rounded-full w-36 shadow-lg"
                  />
                </Column>
                <Column align="right">
                  <Img
                    src="https://i.postimg.cc/50FgRhrM/abella-logo-01.webp"
                    className="w-36"
                  />
                </Column>
              </Row>
            </Section>
            <Heading className="pt-4 text-xxl text-[#120f59]">
              Dear {first_name},
            </Heading>
            <Container>
              <Text className="text-lg text-[#010101]">
                I am thrilled to extend a warm welcome to you and congratulate
                you on taking the first step on your journey to a healthier and
                happier you. Here at{" "}
                <span className="text-xl font-bold text-[#120f59]">
                  Abella Total Health{" "}
                </span>{" "}
                our primary goal is to inspire and support you in achieving your
                goal of becoming your best self. Whether it is overcoming
                challenges, setting and attaining goals, or gaining clarity on
                your path, our team of coaches are here to guide and empower you
                every step of the way.
              </Text>
              <Text className="text-lg text-[#010101] py-6">
                During your coaching sessions, we will create a safe and
                non-judgmental space where you can freely explore your thoughts,
                feelings, and goals. Together, we will identify your strengths,
                uncover any obstacles, and develop strategies to overcome them.
                Your coaching journey is personalized and tailored specifically
                to you so that we can work together to leverage your unique
                potential and create the life you desire and deserve.
              </Text>
              <Text className="text-lg text-[#010101] pb-6">
                We are confident that we will achieve remarkable results
                together as we navigate your journey towards personal and
                professional fulfillment. One of our experienced team members
                will reach out to you in the next 72 hours to discuss our
                programming, your specific goals, and answer any questions you
                may have about how everything works.
              </Text>
              <Text className="text-lg text-[#010101] pb-6">
                Once again, welcome to{" "}
                <span className="text-xl font-bold text-[#120f59]">
                  Abella Total Health.
                </span>{" "}
                We are glad that you have chosen us to be a part of this
                empowering and transformative journey!
              </Text>
              <Text className="text-lg text-[#010101] pb-0 mb-0">
                Warmest regards,
              </Text>
              <Text className="text-lg text-[#120f59] pb-0 mb-0 font-bold">
                Sherri Johnston, MSN RN
              </Text>
              <Text className="text-lg text-[#120f59] p-0 m-0 font-bold">
                President
              </Text>
              <Text className="text-lg text-[#120f59] p-0 m-0 font-bold">
                Abella Total Health
              </Text>
            </Container>
            <Hr className="border border-solid border-[#111525] my-[26px] mx-0 w-full" />
            <Row className="text-center">
              <Column align="right">
                <Link href="www.google.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#120f59" }}
                    className="w-8"
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link href="www.google.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#120f59" }}
                    className="w-8"
                  />
                </Link>
              </Column>
              <Column align="left">
                <Link href="www.google.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faPatreon}
                    style={{ color: "#120f59" }}
                    className="w-8"
                  />
                </Link>
              </Column>
            </Row>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
