import { type BaseCollectionPaginationCountResponse } from '../../../../models/baseCollectionPaginationCountResponse';
import { type UserActivity } from '../../../../models/userActivity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RecentResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserActivity[] | undefined;
}
