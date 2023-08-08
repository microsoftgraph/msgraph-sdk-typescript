import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ResourceSpecificPermissionGrant} from './resourceSpecificPermissionGrant';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceSpecificPermissionGrantCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ResourceSpecificPermissionGrant[] | undefined;
}
