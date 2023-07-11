import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SwapShiftsChangeRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SwapShiftsChangeRequest[] | undefined;
}
