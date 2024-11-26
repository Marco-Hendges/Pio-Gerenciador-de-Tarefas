import { IonFooter, IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import { home, informationCircle, person } from 'ionicons/icons';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <IonFooter>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="about" href="/about">
                    <IonIcon icon={informationCircle} />
                    <IonLabel>Sobre</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile">
                    <IonIcon icon={person} />
                    <IonLabel>Perfil</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonFooter>
    );
};

export default Navbar;
