import {ResourceReference} from './resourceReference';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceReference(writer: SerializationWriter, resourceReference: ResourceReference | undefined = {} as ResourceReference) : void {
        writer.writeStringValue("id", resourceReference.id);
        writer.writeStringValue("@odata.type", resourceReference.odataType);
        writer.writeStringValue("type", resourceReference.type);
        writer.writeStringValue("webUrl", resourceReference.webUrl);
        writer.writeAdditionalData(resourceReference.additionalData);
}
