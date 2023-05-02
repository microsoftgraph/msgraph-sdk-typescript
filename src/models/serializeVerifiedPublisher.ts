import {VerifiedPublisher} from './verifiedPublisher';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVerifiedPublisher(writer: SerializationWriter, verifiedPublisher: VerifiedPublisher | undefined = {} as VerifiedPublisher) : void {
        writer.writeDateValue("addedDateTime", verifiedPublisher.addedDateTime);
        writer.writeStringValue("displayName", verifiedPublisher.displayName);
        writer.writeStringValue("@odata.type", verifiedPublisher.odataType);
        writer.writeStringValue("verifiedPublisherId", verifiedPublisher.verifiedPublisherId);
        writer.writeAdditionalData(verifiedPublisher.additionalData);
}
