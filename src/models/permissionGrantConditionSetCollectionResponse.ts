import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionGrantConditionSetCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PermissionGrantConditionSet[] | undefined;
}
