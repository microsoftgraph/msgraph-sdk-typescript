import { type ReferenceUpdate } from './referenceUpdate';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeReferenceUpdate(writer: SerializationWriter, referenceUpdate: ReferenceUpdate | undefined = {} as ReferenceUpdate) : void {
        writer.writeStringValue("@odata.id", referenceUpdate.odataId);
        writer.writeStringValue("@odata.type", referenceUpdate.odataType);
        writer.writeAdditionalData(referenceUpdate.additionalData);
}
