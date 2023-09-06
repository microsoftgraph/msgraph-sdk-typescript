import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type OfferShiftRequest } from './offerShiftRequest';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OfferShiftRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OfferShiftRequest[] | undefined;
}
