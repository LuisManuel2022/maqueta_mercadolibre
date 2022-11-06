import React from "react";
import {
  Container,
  Title,
  Card,
  MarcaIcon,
  PlatinumIcon,
  Reputacion,
  Caja,
  Row,
  SupportIcon,
  ClockIcon,
  Link,
} from "./styled";

export const InfoVendedor = () => {
  return (
    <Container>
      <Title>Información de la Tienda</Title>
      <Card>
        <MarcaIcon>
          <img
            className="marca"
            src="https://http2.mlstatic.com/D_Q_NP_693511-MLA46511759109_062021-G.jpg"
            alt="marc"
          />
        </MarcaIcon>
        <div>
          <p>Husky</p>
          <strong>Tienda oficial de Mercado Libre</strong>
        </div>
      </Card>
      <Card>
        <PlatinumIcon>
          <img
            src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg"
            alt="premium"
          />
        </PlatinumIcon>
        <div>
          <span className="platinum">MercadoLíder Platinum</span>
          <p className="platino">¡Es uno de los mejores del sitio!</p>
        </div>
      </Card>
      <Reputacion>
        <Caja>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </Caja>
      </Reputacion>
      <Row>
        <div>
          <strong>32774</strong>
          <span>Ventas en los últimos 60 días</span>
        </div>
        <div>
          <strong>
            <SupportIcon>
              <img
                src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
                alt="chat"
              />
            </SupportIcon>
          </strong>
          <span>Brinda buena atención</span>
        </div>
        <div>
          <strong>
            <ClockIcon>
              <img
                src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
                alt="clock"
              />
            </ClockIcon>
          </strong>
          <span>Entrega sus productos a tiempo</span>
        </div>
      </Row>

      <Link href="#">Ver más datos de Husky</Link>
    </Container>
  );
};
