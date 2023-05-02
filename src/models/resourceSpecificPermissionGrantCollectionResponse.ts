import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceSpecificPermissionGrantCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ResourceSpecificPermissionGrant[] | undefined;
}
