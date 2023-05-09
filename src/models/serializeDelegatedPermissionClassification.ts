import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {PermissionClassificationType} from './permissionClassificationType';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedPermissionClassification(writer: SerializationWriter, delegatedPermissionClassification: DelegatedPermissionClassification | undefined = {} as DelegatedPermissionClassification) : void {
        serializeEntity(writer, delegatedPermissionClassification)
        writer.writeEnumValue<PermissionClassificationType>("classification", delegatedPermissionClassification.classification);
        writer.writeStringValue("permissionId", delegatedPermissionClassification.permissionId);
        writer.writeStringValue("permissionName", delegatedPermissionClassification.permissionName);
}
