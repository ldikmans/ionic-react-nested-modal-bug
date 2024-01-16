import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Fragment } from "react";

interface ContainerProps {
  handleClose: () => void;
  presentingElement?: HTMLElement;
}

const ControllerModal2: React.FC<ContainerProps> = ({
  handleClose,
  presentingElement,
}) => {
  function closeControllerModal2() {
    console.log("closing controller modal2");
    handleClose();
  }

  return (
    <Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Controller Modal2</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => closeControllerModal2()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>This is final modal. we try to close this one.</p>
        <IonButton onClick={() => closeControllerModal2()}>Close me</IonButton>
      </IonContent>
    </Fragment>
  );
};

export default ControllerModal2;
