import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type PermissionGrantPolicy } from './permissionGrantPolicy';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PermissionGrantPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PermissionGrantPolicy[] | undefined;
}
