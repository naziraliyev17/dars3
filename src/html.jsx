import React, { Component } from "react";
import { Web, Asosiy, AnaMin, Analitika, Ichki, Icon, Img, BirXil, Container, ChevronRight, Main, Profil, Name, Gmail } from "./style";

class CrmMin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTalabalar: false,
      showLidlar: false,
      showGuruhlar: false,
      showKurslar: false,
      showHr: false,
      showSozlamalar: false
    };
  }

  inOpen = (type) => {
    this.setState((prevState) => ({
      showTalabalar: type === "talabalar" ? !prevState.showTalabalar : prevState.showTalabalar,
      showLidlar: type === "lidlar" ? !prevState.showLidlar : prevState.showLidlar,
      showGuruhlar: type === "guruhlar" ? !prevState.showGuruhlar : prevState.showGuruhlar,
      showKurslar: type === "kurslar" ? !prevState.showKurslar : prevState.showKurslar,
      showHr: type === "hr" ? !prevState.showHr : prevState.showHr,
      showSozlamalar: type === "sozlamalar" ? !prevState.showSozlamalar : prevState.showSozlamalar
    }));
  };

  render() {
    const { showTalabalar, showLidlar, showGuruhlar, showKurslar, showHr, showSozlamalar } = this.state;

    return (
      <Container>
        <Main>
          <Web>Webbrain.crm</Web>
          <Profil>
            <Img src="https://avatars.mds.yandex.net/i?id=a3f444f2ad149a03407c6d8a3bd44705c1867f72-7953126-images-thumbs&n=13" alt="no img" />
            <div>
              <Name>Elyorbek Naziraliyev</Name>
              <Gmail>elyorbeknaziraliyev@gmail.com</Gmail>
            </div>
          </Profil>
          <Analitika>
            <AnaMin>
              <Icon className="fa-solid fa-chart-pie"></Icon>
              Analitika
            </AnaMin>
          </Analitika>
          <BirXil>
            <Asosiy onClick={() => this.inOpen("lidlar")}>
              <Icon className="fa-regular fa-pen-to-square"></Icon>
              Lidlar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showLidlar && (
              <ul>
                <li className="ichki">Barcha Lidlar</li>
                <li className="ichki">Birinchi Dars</li>
                <li className="ichki">Yangi Talabalar</li>
              </ul>
            )}
          </BirXil>
          <Analitika>
            <Asosiy>
              <Icon className="fa-solid fa-sack-dollar"></Icon>
              Moliya
            </Asosiy>
          </Analitika>
          <BirXil>
            <Asosiy onClick={() => this.inOpen("talabalar")}>
              <Icon className="fa-solid fa-graduation-cap"></Icon>
              Talabalar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showTalabalar && (
              <div>
                <Ichki>Barcha Talabalar</Ichki>
                <Ichki>Davomat</Ichki>
                <Ichki>Aktive</Ichki>
                <Ichki>Arxiv</Ichki>
                <Ichki>Ota-onalar</Ichki>
              </div>
            )}
          </BirXil>
          <BirXil>
            <Asosiy onClick={() => this.inOpen("guruhlar")}>
              <Icon className="fa-solid fa-user-group"></Icon>
              Guruhlar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showGuruhlar && (
              <div>
                <Ichki>Guruhlar</Ichki>
                <Ichki>Dars Jadvali</Ichki>
                <Ichki>Xonalar</Ichki>
              </div>
            )}
          </BirXil>
          <BirXil>
            <Asosiy onClick={() => this.inOpen("kurslar")}>
              <Icon className="fa-solid fa-book-bookmark"></Icon>
              Kurslar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showKurslar && (
              <div>
                <Ichki>Barcha Kurslar</Ichki>
                <Ichki>Yo'nalishlar</Ichki>
              </div>
            )}
          </BirXil>
          <BirXil>
            <Asosiy onClick={() => this.inOpen("hr")}>
              <Icon className="fa-solid fa-briefcase"></Icon>
              HR
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showHr && (
              <div>
                <Ichki>Ro'llar</Ichki>
                <Ichki>Hodimlar</Ichki>
              </div>
            )}
          </BirXil>
          <BirXil>
            <Asosiy onClick={() => this.inOpen("sozlamalar")}>
              <Icon className="fa-solid fa-gear"></Icon>
              Sozlamalar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showSozlamalar && (
              <div>
                <Ichki>Umumiy Sozlamalar</Ichki>
                <Ichki>Manager</Ichki>
                <Ichki>Mentor</Ichki>
                <Ichki>Talaba</Ichki>
              </div>
            )}
          </BirXil>
        </Main>
      </Container>
    );
  }
}

export default CrmMin;