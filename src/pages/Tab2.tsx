import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import "./Tab2.css";
import ControllerModal1 from "../components/ControllerModal1";

const Tab2: React.FC = () => {
  const [present, dismiss] = useIonModal(ControllerModal1, {
    handleClose: closeControllerModal1,
  });

  function clickOpenControllerModal1() {
    console.log("presenting the controller modal");
    present();
  }

  function closeControllerModal1() {
    console.log("dismissing the controller modal");
    dismiss();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controller Modal Parent</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Controller Modal Parent</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => clickOpenControllerModal1()}>
          Open the controllermodal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
