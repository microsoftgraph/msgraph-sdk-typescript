import {ReferenceUpdate} from './referenceUpdate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferenceUpdate(writer: SerializationWriter, referenceUpdate: ReferenceUpdate | undefined = {} as ReferenceUpdate) : void {
        writer.writeStringValue("@odata.id", referenceUpdate.odataId);
        writer.writeStringValue("@odata.type", referenceUpdate.odataType);
        writer.writeAdditionalData(referenceUpdate.additionalData);
}
