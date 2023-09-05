import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TimeOffRequest } from './timeOffRequest';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TimeOffRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TimeOffRequest[] | undefined;
}
