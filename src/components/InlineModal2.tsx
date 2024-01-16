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
} from "@ionic/react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface ContainerProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  inlineParent?: boolean;
}

const InlineModal2: React.FC<ContainerProps> = ({
  showModal,
  setShowModal,
  inlineParent,
}) => {
  function closeInlineModal2() {
    console.log("closing inline modal2");
    setShowModal(false);
  }

  function addButtonListener() {
    const button = document.getElementById("inlinemodal2-button");
    if (button) {
      button.addEventListener("click", () => {
        console.log("in the added event listener");
        closeInlineModal2();
      });
    }
  }

  return (
    <IonModal
      onDidPresent={() => addButtonListener()}
      isOpen={showModal}
      onDidDismiss={() => setShowModal(false)}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal2</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => closeInlineModal2()}>
              {inlineParent ? "Close (works)" : "Close (doesn't work)"}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          {inlineParent
            ? "This the second inline modal."
            : "This is the second inline modal. The first button only works because I manually added an eventlistener for click to it. The second button does not work"}
        </p>
        <IonList>
          <IonItem lines="none">
            <IonButton
              id="inlinemodal2-button"
              onClick={() => closeInlineModal2()}
            >
              Close the modal
            </IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonButton
              id="inlinemodal2-button2"
              onClick={() => closeInlineModal2()}
            >
              {inlineParent ? "Close the modal" : "Close (Does not work)"}
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default InlineModal2;
