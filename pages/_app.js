import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [lights, setLights] = useState([
    { id: "1", name: "livingroom", isOn: false },
    { id: "2", name: "kitchen", isOn: false },
    { id: "3", name: "bedroom", isOn: false },
    { id: "4", name: "bathroom", isOn: false },
    { id: "5", name: "garage", isOn: false },
    { id: "6", name: "porch", isOn: false },
    { id: "7", name: "garden", isOn: false },
    { id: "8", name: "office", isOn: false },


  ]);

  const toggleLight = (id) => {
    setLights((lights) => lights.map((light) =>
  light.id === id ? { ...lights, isOn: !lights.isOn } : light
  )
  );
}

return (
  <Layout>
    <GlobalStyle />
    <Component {...pageProps} />
  </Layout>
);
}
