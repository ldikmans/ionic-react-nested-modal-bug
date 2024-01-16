import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  useIonModal,
} from "@ionic/react";
import { Dispatch, SetStateAction, useState } from "react";
import InlineModal2 from "./InlineModal2";
import ControllerModal2 from "./ControllerModal2";

interface ContainerProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  presentingElement?: HTMLElement;
}

const InlineModal1: React.FC<ContainerProps> = ({
  showModal,
  setShowModal,
  presentingElement,
}) => {
  const [isModal2Open, setIsModal2Open] = useState<boolean>(false);

  const [present, dismiss] = useIonModal(ControllerModal2, {
    handleClose: closeControllerModal2,
  });

  function closeControllerModal2() {
    console.log("closing controller modal2");
    dismiss();
  }

  function clickOpenInlineModal2() {
    console.log("opening inline modal2");
    setIsModal2Open(true);
  }

  function clickOpenControllerModal2() {
    console.log("opening controllermodal2");
    present();
  }

  function closeInlineModal1() {
    console.log("closing inline modal1");
    setShowModal(false);
  }

  return (
    <IonModal isOpen={showModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal1</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => closeInlineModal1()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          This is the first modal. It is an inline modal. Now we open the second
          one. You can choose either an inline modal or a controller modal. Both
          work as expected.
        </p>
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
          inlineParent
        ></InlineModal2>
      </IonContent>
    </IonModal>
  );
};

export default InlineModal1;
