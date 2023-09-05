import { type ResourceReference } from './resourceReference';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeResourceReference(writer: SerializationWriter, resourceReference: ResourceReference | undefined = {} as ResourceReference) : void {
        writer.writeStringValue("id", resourceReference.id);
        writer.writeStringValue("@odata.type", resourceReference.odataType);
        writer.writeStringValue("type", resourceReference.type);
        writer.writeStringValue("webUrl", resourceReference.webUrl);
        writer.writeAdditionalData(resourceReference.additionalData);
}
