import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionGrantPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PermissionGrantPolicy[] | undefined;
}
