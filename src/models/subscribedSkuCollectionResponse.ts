import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SubscribedSku} from './subscribedSku';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubscribedSkuCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SubscribedSku[] | undefined;
}
