import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PermissionClassificationType} from './permissionClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedPermissionClassification(delegatedPermissionClassification: DelegatedPermissionClassification | undefined = {} as DelegatedPermissionClassification) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(delegatedPermissionClassification),
        "classification": n => { delegatedPermissionClassification.classification = n.getEnumValue<PermissionClassificationType>(PermissionClassificationType); },
        "permissionId": n => { delegatedPermissionClassification.permissionId = n.getStringValue(); },
        "permissionName": n => { delegatedPermissionClassification.permissionName = n.getStringValue(); },
    }
}
