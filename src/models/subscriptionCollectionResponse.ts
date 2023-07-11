import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Subscription} from './subscription';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubscriptionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Subscription[] | undefined;
}
