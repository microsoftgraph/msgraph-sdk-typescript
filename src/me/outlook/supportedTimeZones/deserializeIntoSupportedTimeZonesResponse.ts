import {createTimeZoneInformationFromDiscriminatorValue} from '../../../models/createTimeZoneInformationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTimeZoneInformation} from '../../../models/serializeTimeZoneInformation';
import type {TimeZoneInformation} from '../../../models/timeZoneInformation';
import type {SupportedTimeZonesResponse} from './supportedTimeZonesResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSupportedTimeZonesResponse(supportedTimeZonesResponse: SupportedTimeZonesResponse | undefined = {} as SupportedTimeZonesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(supportedTimeZonesResponse),
        "value": n => { supportedTimeZonesResponse.value = n.getCollectionOfObjectValues<TimeZoneInformation>(createTimeZoneInformationFromDiscriminatorValue); },
    }
}
