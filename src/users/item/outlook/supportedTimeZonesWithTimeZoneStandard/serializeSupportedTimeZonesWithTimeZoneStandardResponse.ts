import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeTimeZoneInformation} from '../../../../models/serializeTimeZoneInformation';
import type {TimeZoneInformation} from '../../../../models/timeZoneInformation';
import type {SupportedTimeZonesWithTimeZoneStandardResponse} from './supportedTimeZonesWithTimeZoneStandardResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSupportedTimeZonesWithTimeZoneStandardResponse(writer: SerializationWriter, supportedTimeZonesWithTimeZoneStandardResponse: SupportedTimeZonesWithTimeZoneStandardResponse | undefined = {} as SupportedTimeZonesWithTimeZoneStandardResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, supportedTimeZonesWithTimeZoneStandardResponse)
        writer.writeCollectionOfObjectValues<TimeZoneInformation>("value", supportedTimeZonesWithTimeZoneStandardResponse.value, serializeTimeZoneInformation);
}
