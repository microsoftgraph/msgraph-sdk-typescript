import type {ReferenceCreate} from './referenceCreate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferenceCreate(writer: SerializationWriter, referenceCreate: ReferenceCreate | undefined = {} as ReferenceCreate) : void {
        writer.writeStringValue("@odata.id", referenceCreate.odataId);
        writer.writeAdditionalData(referenceCreate.additionalData);
}
