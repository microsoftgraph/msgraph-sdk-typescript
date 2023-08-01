import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Shift} from './shift';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ShiftCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Shift[] | undefined;
}
