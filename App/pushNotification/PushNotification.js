import PushNotification from 'react-native-push-notification';



const PushNotification = (onNotification) => {
    PushNotification.configure({
        onNotification:function(notification){
            console.log("NOTIFICATION:", notification);
            if(notification === 'Take Medication'){

            }
            onNotification(notification);
        },
        requestPermissions:Platform.OS === 'ios',
    })
}

export default PushNotification;