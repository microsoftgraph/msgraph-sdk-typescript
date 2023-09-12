import { type DelegatedPermissionClassification } from './delegatedPermissionClassification';
import { PermissionClassificationType } from './permissionClassificationType';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDelegatedPermissionClassification(writer: SerializationWriter, delegatedPermissionClassification: DelegatedPermissionClassification | undefined = {} as DelegatedPermissionClassification) : void {
        serializeEntity(writer, delegatedPermissionClassification)
        writer.writeEnumValue<PermissionClassificationType>("classification", delegatedPermissionClassification.classification);
        writer.writeStringValue("permissionId", delegatedPermissionClassification.permissionId);
        writer.writeStringValue("permissionName", delegatedPermissionClassification.permissionName);
}
