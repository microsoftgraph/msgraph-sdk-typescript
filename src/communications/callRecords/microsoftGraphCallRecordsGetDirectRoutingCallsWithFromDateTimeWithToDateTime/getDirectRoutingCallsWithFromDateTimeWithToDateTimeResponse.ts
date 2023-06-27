import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {DirectRoutingLogRow} from '../../../models/callRecords/directRoutingLogRow';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectRoutingLogRow[] | undefined;
}
