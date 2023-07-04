import {ActivityBasedTimeoutPolicy} from './activityBasedTimeoutPolicy';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityBasedTimeoutPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ActivityBasedTimeoutPolicy[] | undefined;
}
