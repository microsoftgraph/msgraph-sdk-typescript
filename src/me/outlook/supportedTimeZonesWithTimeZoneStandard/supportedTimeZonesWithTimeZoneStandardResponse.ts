import { type BaseCollectionPaginationCountResponse } from '../../../models/baseCollectionPaginationCountResponse';
import { type TimeZoneInformation } from '../../../models/timeZoneInformation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SupportedTimeZonesWithTimeZoneStandardResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TimeZoneInformation[] | undefined;
}
