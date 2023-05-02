import {ResourceSpecificPermissionGrant} from '../../../models/resourceSpecificPermissionGrant';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeResourceSpecificPermissionGrant} from '../../../models/serializeResourceSpecificPermissionGrant';
import {CheckGrantedPermissionsForAppResponse} from './checkGrantedPermissionsForAppResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckGrantedPermissionsForAppResponse(writer: SerializationWriter, checkGrantedPermissionsForAppResponse: CheckGrantedPermissionsForAppResponse | undefined = {} as CheckGrantedPermissionsForAppResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checkGrantedPermissionsForAppResponse)
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("value", checkGrantedPermissionsForAppResponse.value, serializeResourceSpecificPermissionGrant);
}
