import React from "react";
import {
  Container,
  Estado,
  Row,
  HeartIcon,
  Price,
  PrevPrice,
  Card,
  CheckIcon,
  Color,
  Cantidad,
  ButtonCard,
  Button,
  Beneficios,
  ShildeIcon,
  CopaIcon,
  ArrowReturn,
  GarantyIcon,
} from "./styles";

export const ProductoVenta = () => {
  return (
    <Container>
      <Estado>
        <p>Nuevo | 9336 vendidos</p>
      </Estado>
      <Row>
        <h1>Motosierra Gasolina Leñera 2.5 Hp Barra 20'' Hkm520 Husky</h1>
        <HeartIcon />
      </Row>
      <PrevPrice></PrevPrice>
      <Price>$1,289<span>  32% OFF</span></Price>
      <Card>
        <div className="envio">
          <span className="title">
            <CheckIcon />
            Envío gratis a todo el país
          </span>
          <br />
          <span className="detalle">
            Conoce los tiempos y las formas de envío.
          </span>
          <br />
          <a href="#" className="more">
            Calcular cuándo llega
          </a>|
        </div>

        <div className="devolucion">
          <span className="title">
            <ArrowReturn />
            &nbsp;&nbsp;Devolucion gratis
          </span>
          <br />
          <span className="detalle">Tienes 30 días desde que lo recibes.</span>
          <br />
          <a href="#">Conocer más</a>
        </div>
      </Card>
      <Color>
        Color: <strong>Negro</strong><br/>
        <br/><br/>
        Stock disponible
      </Color>
      <Cantidad>
        <p>Cantidad</p>
        <strong>1 unidad</strong>
        <input type="number" value="" />
        <span>(1215 disponibles)</span>
      </Cantidad>
      <ButtonCard>
        <Button className="one">Comprar ahora</Button>
        <Button className="two">Agregar al carrito</Button>
      </ButtonCard>
      <Beneficios>
        <li>
          <ShildeIcon />
          <p>
            Compra protegida,
            <span className="compra">
              recibe el producto que esperabas o te devolvemos tu dinero.
            </span>
          </p>
        </li>
        <li>
          <CopaIcon />
          <p>
            Mercado Puntos,
            <span>Sumas 67 puntos.</span>
          </p>
        </li>
        <li>
          <GarantyIcon />
          <span>6 meses de garantía de fábrica.</span>
        </li>
      </Beneficios>
    </Container>
  );
};
