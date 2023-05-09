import {createTimeZoneInformationFromDiscriminatorValue} from '../../../../models/createTimeZoneInformationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTimeZoneInformation} from '../../../../models/serializeTimeZoneInformation';
import {TimeZoneInformation} from '../../../../models/timeZoneInformation';
import {SupportedTimeZonesWithTimeZoneStandardResponse} from './supportedTimeZonesWithTimeZoneStandardResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse(supportedTimeZonesWithTimeZoneStandardResponse: SupportedTimeZonesWithTimeZoneStandardResponse | undefined = {} as SupportedTimeZonesWithTimeZoneStandardResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(supportedTimeZonesWithTimeZoneStandardResponse),
        "value": n => { supportedTimeZonesWithTimeZoneStandardResponse.value = n.getCollectionOfObjectValues<TimeZoneInformation>(createTimeZoneInformationFromDiscriminatorValue); },
    }
}
