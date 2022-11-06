import React from "react";
import { InfoVendedor } from "../InfoVendedor";
import { ProductoVenta } from "../ProductoVenta";
import {
  Container,
  Panel,
  Column,
  Galeria,
  Description,
  Section,
} from "./styles";

export const Producto = () => {
  return (
    <Container>
      <Panel>
        <Column>
          <Galeria>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_917219-MLM44240531221_122020-O.webp"
              alt="producto"
            />
          </Galeria>
          <Info />
        </Column>
        <Column>
          <ProductoVenta/>
          <InfoVendedor />
          <Garantia />
        </Column>
      </Panel>
    </Container>
  );
};

const Info = () => {
  return (
    <Description>
      <h4>Descripción</h4>
      <br />

      <p>
        Motosierra HKM520 Kusky para podas y derrames con motor de gasolina de 2
        <br />
        tiempos marca HUSKY. Ideales para tala y poda de jardines, fincas y
        derrame
        <br /> de árboles.
        <br />
        <br />
        <br />
        Hyundai es una empresa formalmente establecida que se dedica a la
        <br />
        comercialización de productos enfocados en los sectores agrícola,
        forestal y <br />
        de la construcción en el mercado mexicano.
        <br />
        <br />
        <br />
        Ayudando a sus consumidores a obtener la mejor experiencia con trabajos
        de <br />
        calidad. Hyundai y Husky son marcas conglomeradas con una extensa red
        <br />
        comercial en más de 190 países, con presencia y calidad en Estados
        Unidos, <br />
        Canadá, Europa, Medio Oriente, Asia y Australia.
        <br />
        <br />
      </p>
      <p>Especificaciones:</p>
      <br />
      <p>
        Motosierra a gasolina. <br />
        Cilindrada: 52 cc. <br />
        Potencia: 2.5 hp/2.2 kw.
        <br />
        Mezcla de combustible: Gasolina / Aceite 1. <br />
        Capacidad tanque de combustible: 550 ml. <br />
        Aceite de cadena: Aceite de motor SAE#40. <br />
        Capacidad del tanque de aceite: 260 ml. <br />
        Carburador: Tipo diafragma. <br />
        Consumo máximo de combustible: 560g/kw.h. <br />
        Tamaño de la barra: 20''''. <br />
        Cadena: 0.325''''. <br />
        Diámetro De Corte: 560 mm. <br />
        Peso: 7.5 kg. <br />
        Dimensión de Caja: 43.5 x 34.5 x 32.5 cm.
      </p>
      <br />
      <br />
      <p>Incluye:</p>
      <p>
        Motosierra Husky SW5220. <br />
        Cadena. Barra. <br />
        Juego de llaves. <br />
        Instructivo.
        <br />
        Póliza de garantía. <br />
        <br />
        **Nota importante: Solo colocar aceite en el deposito para lubricar la
        cadena al <br />
        momento de usarla y si sobra aceite al finalizar su uso se debe retirar
        para evitar derrames.
        <br />
        <br />
        ---------------------------------------------------------------------
        <br />
        Garantía de los productos
        <br />
        <br />
        Todos los productos que vendemos cuentan con garantía la cual puede
        hacer válida directamente con nosotros*. <br />
        Es necesario recordar que la garantía procede siempre y cuando el
        producto sea reclamado por un defecto de fábrica real y no por un mal
        manejo o abuso de la herramienta. <br />
        *Ninguna de nuestras máquinas eléctricas, neumáticas, podadoras,
        desbrozadoras, motosierras, gatos hidráulicos, polipastos y soldadoras
        se aceptan en devolución. Estas deben ser llevadas a cualquier Centro de
        Servicio Autorizado.
        <br />
        ---------------------------------------------------------------------
        <br />
        Políticas de venta <br />
        Lunes a Viernes de 8:30 a 18:00 horas. <br />
        Si damos factura, los precios incluyen IVA. <br />
        Respetamos todas las garantías que ofrece la marca. <br />
        Somos una empresa formalmente constituida y registrada ante el SAT.
        ---------------------------------------------------------------------
        <br />
        <br />
        ---------------------------------------------------------------------
        <br />
        Garantía de los productos <br />
        <br />
        Todos los productos que vendemos cuentan con garantía la cual puede
        hacer válida directamente con nosotros*. <br />
        Es necesario recordar que la garantía procede siempre y cuando el
        producto sea reclamado por un defecto de fábrica real y no por un mal
        manejo o abuso de la herramienta. <br />
        *Ninguna de nuestras máquinas eléctricas, neumáticas, podadoras,
        desbrozadoras, motosierras, gatos hidráulicos, polipastos y soldadoras
        se aceptan en devolución. Estas deben ser llevadas a cualquier Centro de
        Servicio Autorizado.
        <br />
        ---------------------------------------------------------------------
        <br />
        Políticas de venta <br />
        <br />
        Lunes a Viernes de 8:30 a 18:00 horas. <br />
        Si damos factura, los precios incluyen IVA. <br />
        Respetamos todas las garantías que ofrece la marca. <br />
        Somos una empresa formalmente constituida y registrada ante el SAT.
        ---------------------------------------------------------------------
      </p>
    </Description>
  );
};

const Garantia = () => {
  return (
    <Section>
      <h4>Garantía</h4>

      <div>
        <span>
          <p className="title">Compra Protegida con Mercado Pago</p>
          <p className="description">
            Recibe el producto que esperabas o te devolvemos tu dinero
          </p>
        </span>
        <span>
          <p className="title">Garantía de la tienda</p>
          <p className="description">Garantía de fábrica: 6 meses</p>
        </span>
        <a href="#">Conocer más sobre garantía</a>
      </div>
    </Section>
  );
};
