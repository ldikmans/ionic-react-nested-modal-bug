import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import { Fragment, useState } from "react";
import InlineModal2 from "./InlineModal2";
import ControllerModal2 from "./ControllerModal2";

interface ContainerProps {
  handleClose: () => void;
  presentingElement?: HTMLElement;
}

const ControllerModal1: React.FC<ContainerProps> = ({
  handleClose,
  presentingElement,
}) => {
  function closeModal() {
    console.log("clicked close in the controller modal");
    handleClose();
  }

  const [present, dismiss] = useIonModal(ControllerModal2, {
    handleClose: closeControllerModal2,
    presentingElement: presentingElement,
  });

  function closeControllerModal2() {
    console.log("dismissing controller modal2");
    dismiss();
  }

  const [isModal2Open, setIsModal2Open] = useState<boolean>(false);

  function clickOpenInlineModal2() {
    console.log("opening inline modal2");
    setIsModal2Open(true);
  }

  function clickOpenControllerModal2() {
    console.log("presenting controllermodal2");
    present();
  }

  return (
    <Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ControllerModal1</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => closeModal()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>This is the first modal. Now we open the second one.</p>

        <IonList>
          <IonItem>
            <IonButton onClick={() => clickOpenInlineModal2()}>
              Open inline modal2
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton onClick={() => clickOpenControllerModal2()}>
              Open controller modal2
            </IonButton>
          </IonItem>
        </IonList>
        <InlineModal2
          showModal={isModal2Open}
          setShowModal={setIsModal2Open}
        ></InlineModal2>
      </IonContent>
    </Fragment>
  );
};

export default ControllerModal1;
