import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SwapShiftsChangeRequest } from './swapShiftsChangeRequest';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SwapShiftsChangeRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SwapShiftsChangeRequest[] | undefined;
}
