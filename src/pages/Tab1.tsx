import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import InlineModal1 from "../components/InlineModal1";
import { useState } from "react";

const Tab1: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function clickOpenInlineModal1() {
    console.log("opening inline modal1");
    setIsOpen(true);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal Parent</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inline Modal Parent</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => clickOpenInlineModal1()}>
          Open the first inline modal
        </IonButton>
        <InlineModal1
          showModal={isOpen}
          setShowModal={setIsOpen}
        ></InlineModal1>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
