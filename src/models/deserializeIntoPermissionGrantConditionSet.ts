import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionType} from './permissionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPermissionGrantConditionSet(permissionGrantConditionSet: PermissionGrantConditionSet | undefined = {} as PermissionGrantConditionSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(permissionGrantConditionSet),
        "clientApplicationIds": n => { permissionGrantConditionSet.clientApplicationIds = n.getCollectionOfPrimitiveValues<string>(); },
        "clientApplicationPublisherIds": n => { permissionGrantConditionSet.clientApplicationPublisherIds = n.getCollectionOfPrimitiveValues<string>(); },
        "clientApplicationsFromVerifiedPublisherOnly": n => { permissionGrantConditionSet.clientApplicationsFromVerifiedPublisherOnly = n.getBooleanValue(); },
        "clientApplicationTenantIds": n => { permissionGrantConditionSet.clientApplicationTenantIds = n.getCollectionOfPrimitiveValues<string>(); },
        "permissionClassification": n => { permissionGrantConditionSet.permissionClassification = n.getStringValue(); },
        "permissions": n => { permissionGrantConditionSet.permissions = n.getCollectionOfPrimitiveValues<string>(); },
        "permissionType": n => { permissionGrantConditionSet.permissionType = n.getEnumValue<PermissionType>(PermissionType); },
        "resourceApplication": n => { permissionGrantConditionSet.resourceApplication = n.getStringValue(); },
    }
}
