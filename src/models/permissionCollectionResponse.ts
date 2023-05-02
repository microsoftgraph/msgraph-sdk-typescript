import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Permission} from './permission';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Permission[] | undefined;
}
