import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {UserActivity} from '../../../../models/userActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RecentResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: UserActivity[] | undefined;
}
