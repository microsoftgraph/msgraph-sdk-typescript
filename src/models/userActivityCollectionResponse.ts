import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {UserActivity} from './userActivity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface UserActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserActivity[] | undefined;
}
