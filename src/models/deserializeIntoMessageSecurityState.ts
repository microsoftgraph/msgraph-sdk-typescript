import {MessageSecurityState} from './messageSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageSecurityState(messageSecurityState: MessageSecurityState | undefined = {} as MessageSecurityState) : Record<string, (node: ParseNode) => void> {
    return {
        "connectingIP": n => { messageSecurityState.connectingIP = n.getStringValue(); },
        "deliveryAction": n => { messageSecurityState.deliveryAction = n.getStringValue(); },
        "deliveryLocation": n => { messageSecurityState.deliveryLocation = n.getStringValue(); },
        "directionality": n => { messageSecurityState.directionality = n.getStringValue(); },
        "internetMessageId": n => { messageSecurityState.internetMessageId = n.getStringValue(); },
        "messageFingerprint": n => { messageSecurityState.messageFingerprint = n.getStringValue(); },
        "messageReceivedDateTime": n => { messageSecurityState.messageReceivedDateTime = n.getDateValue(); },
        "messageSubject": n => { messageSecurityState.messageSubject = n.getStringValue(); },
        "networkMessageId": n => { messageSecurityState.networkMessageId = n.getStringValue(); },
        "@odata.type": n => { messageSecurityState.odataType = n.getStringValue(); },
    }
}
