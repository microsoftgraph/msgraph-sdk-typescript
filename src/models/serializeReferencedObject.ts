import { type ReferencedObject } from './referencedObject';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeReferencedObject(writer: SerializationWriter, referencedObject: ReferencedObject | undefined = {} as ReferencedObject) : void {
        writer.writeStringValue("@odata.type", referencedObject.odataType);
        writer.writeStringValue("referencedObjectName", referencedObject.referencedObjectName);
        writer.writeStringValue("referencedProperty", referencedObject.referencedProperty);
        writer.writeAdditionalData(referencedObject.additionalData);
}
