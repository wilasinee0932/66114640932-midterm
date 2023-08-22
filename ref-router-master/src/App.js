import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Image } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="myNav p-2 mb-3 text-center">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าแรก
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function FoodList(props) {
  return (
    <div className="column text-center">
      <Image className="img-fluid" src={props.img} width="15%" />
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <Button className="mb-3 itim bg-secondary">ดูวิธีทำ</Button>
    </div>
  );
}

function Footer() {
  return (
    <div className="text-center myNav link sarabun">
      2023 @ Developed by Wilasinee S.
    </div>
  );
}

function Index() {
  return (
    <Container>
      <Layout />
      <h3 className="text-center">วิธีทำอาหารญี่ปุ่นยอดฮิด</h3>
      <div className="row">
        <FoodList
          img="/66114640932-midterm/01.webp"
          name="ซูชิหน้าปลาแซลม่อน"
          desc="ซูชิหน้าปลาดิบ เมนูอาหารญี่ปุ่น ยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู  โดยเฉพาะ ซูชิหน้าปลาแซลม่อน 
          ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ วิธีการทำก็ไม่ยาก เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ 
          แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก ทานได้แล้ว"
        />
        <FoodList
          img="/66114640932-midterm/02.webp"
          name="ปลาซาบะย่างซอสเทริยากิ"
          desc="ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย 
          รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น ก็จะได้ลิ้มรสชาติที่อร่อย ตามแบบฉบับชาวญี่ปุ่นแน่นอน"
        />
        <FoodList
          img="/66114640932-midterm/03.webp"
          name="ยากิโซบะ"
          desc="ยากิโซบะ สูตรนี้ ใช้วัตถุดิบแบบดั้งเดิมที่นิยมใช้กัน นั่นคือ เส้นยากิโซบะ เนื้อหมู กะหล่ำปลี แครอท ถั่วงอก ผัดคลุกเคล้าเข้าด้วยกัน 
          ด้วยซอสแบบโฮมเมด ให้รสชาติแบบที่เราคุ้นเคย โดยสูตรนี้เป็น เมนูอาหารญี่ปุ่น แบบที่แม่บ้านชาวญี่ปุ่นทำกันเลยทีเดียว 
          บอกต่อจากช่อง Just One Cookbook มาดูกันว่า ยากิโซบะแบบดั้งเดิมจากญี่ปุ่น มีวิธีการทำอย่างไร"
        />
      </div>
      <Footer />
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter basename="/66114640932-midterm">
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
