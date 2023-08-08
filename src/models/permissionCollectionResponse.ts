import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Permission} from './permission';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Permission[] | undefined;
}
