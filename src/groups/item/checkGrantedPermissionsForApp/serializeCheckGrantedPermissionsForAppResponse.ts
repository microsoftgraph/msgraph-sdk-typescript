import { type ResourceSpecificPermissionGrant } from '../../../models/resourceSpecificPermissionGrant';
import { serializeBaseCollectionPaginationCountResponse } from '../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeResourceSpecificPermissionGrant } from '../../../models/serializeResourceSpecificPermissionGrant';
import { type CheckGrantedPermissionsForAppResponse } from './checkGrantedPermissionsForAppResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCheckGrantedPermissionsForAppResponse(writer: SerializationWriter, checkGrantedPermissionsForAppResponse: CheckGrantedPermissionsForAppResponse | undefined = {} as CheckGrantedPermissionsForAppResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checkGrantedPermissionsForAppResponse)
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("value", checkGrantedPermissionsForAppResponse.value, serializeResourceSpecificPermissionGrant);
}
