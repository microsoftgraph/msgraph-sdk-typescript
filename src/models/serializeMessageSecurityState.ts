import {MessageSecurityState} from './messageSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageSecurityState(writer: SerializationWriter, messageSecurityState: MessageSecurityState | undefined = {} as MessageSecurityState) : void {
        writer.writeStringValue("connectingIP", messageSecurityState.connectingIP);
        writer.writeStringValue("deliveryAction", messageSecurityState.deliveryAction);
        writer.writeStringValue("deliveryLocation", messageSecurityState.deliveryLocation);
        writer.writeStringValue("directionality", messageSecurityState.directionality);
        writer.writeStringValue("internetMessageId", messageSecurityState.internetMessageId);
        writer.writeStringValue("messageFingerprint", messageSecurityState.messageFingerprint);
        writer.writeDateValue("messageReceivedDateTime", messageSecurityState.messageReceivedDateTime);
        writer.writeStringValue("messageSubject", messageSecurityState.messageSubject);
        writer.writeStringValue("networkMessageId", messageSecurityState.networkMessageId);
        writer.writeStringValue("@odata.type", messageSecurityState.odataType);
        writer.writeAdditionalData(messageSecurityState.additionalData);
}
