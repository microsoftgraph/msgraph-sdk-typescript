import { createResourceSpecificPermissionGrantFromDiscriminatorValue } from '../../../models/createResourceSpecificPermissionGrantFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type ResourceSpecificPermissionGrant } from '../../../models/resourceSpecificPermissionGrant';
import { serializeResourceSpecificPermissionGrant } from '../../../models/serializeResourceSpecificPermissionGrant';
import { type CheckGrantedPermissionsForAppResponse } from './checkGrantedPermissionsForAppResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckGrantedPermissionsForAppResponse(checkGrantedPermissionsForAppResponse: CheckGrantedPermissionsForAppResponse | undefined = {} as CheckGrantedPermissionsForAppResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(checkGrantedPermissionsForAppResponse),
        "value": n => { checkGrantedPermissionsForAppResponse.value = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
    }
}
