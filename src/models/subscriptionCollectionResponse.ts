import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Subscription } from './subscription';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SubscriptionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Subscription[] | undefined;
}
