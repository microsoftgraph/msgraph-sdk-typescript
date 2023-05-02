import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {ResourceSpecificPermissionGrant} from '../../../models/resourceSpecificPermissionGrant';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CheckGrantedPermissionsForAppResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ResourceSpecificPermissionGrant[] | undefined;
}
