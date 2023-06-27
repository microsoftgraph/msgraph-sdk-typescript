import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserActivity} from './userActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserActivity[] | undefined;
}
