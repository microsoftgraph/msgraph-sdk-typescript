import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SubscribedSku } from './subscribedSku';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SubscribedSkuCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SubscribedSku[] | undefined;
}
