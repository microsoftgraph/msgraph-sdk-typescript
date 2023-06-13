import {ReferencedObject} from './referencedObject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferencedObject(writer: SerializationWriter, referencedObject: ReferencedObject | undefined = {} as ReferencedObject) : void {
        writer.writeStringValue("@odata.type", referencedObject.odataType);
        writer.writeStringValue("referencedObjectName", referencedObject.referencedObjectName);
        writer.writeStringValue("referencedProperty", referencedObject.referencedProperty);
        writer.writeAdditionalData(referencedObject.additionalData);
}
