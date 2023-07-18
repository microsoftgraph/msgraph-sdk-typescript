import {ResourceSpecificPermission} from './resourceSpecificPermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeResourceSpecificPermission(writer: SerializationWriter, resourceSpecificPermission: ResourceSpecificPermission | undefined = {} as ResourceSpecificPermission) : void {
        writer.writeStringValue("description", resourceSpecificPermission.description);
        writer.writeStringValue("displayName", resourceSpecificPermission.displayName);
        writer.writeGuidValue("id", resourceSpecificPermission.id);
        writer.writeBooleanValue("isEnabled", resourceSpecificPermission.isEnabled);
        writer.writeStringValue("@odata.type", resourceSpecificPermission.odataType);
        writer.writeStringValue("value", resourceSpecificPermission.value);
        writer.writeAdditionalData(resourceSpecificPermission.additionalData);
}
