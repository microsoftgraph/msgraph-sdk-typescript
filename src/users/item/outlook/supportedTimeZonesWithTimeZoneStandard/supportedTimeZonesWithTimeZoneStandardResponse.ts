import {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import {TimeZoneInformation} from '../../../../models/timeZoneInformation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SupportedTimeZonesWithTimeZoneStandardResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TimeZoneInformation[] | undefined;
}
