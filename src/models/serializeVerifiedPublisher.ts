import { type VerifiedPublisher } from './verifiedPublisher';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeVerifiedPublisher(writer: SerializationWriter, verifiedPublisher: VerifiedPublisher | undefined = {} as VerifiedPublisher) : void {
        writer.writeDateValue("addedDateTime", verifiedPublisher.addedDateTime);
        writer.writeStringValue("displayName", verifiedPublisher.displayName);
        writer.writeStringValue("@odata.type", verifiedPublisher.odataType);
        writer.writeStringValue("verifiedPublisherId", verifiedPublisher.verifiedPublisherId);
        writer.writeAdditionalData(verifiedPublisher.additionalData);
}
