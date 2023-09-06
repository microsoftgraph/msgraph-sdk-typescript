import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type PermissionGrantConditionSet } from './permissionGrantConditionSet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PermissionGrantConditionSetCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PermissionGrantConditionSet[] | undefined;
}
