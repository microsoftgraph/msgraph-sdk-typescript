import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeTimeZoneInformation} from '../../../models/serializeTimeZoneInformation';
import type {TimeZoneInformation} from '../../../models/timeZoneInformation';
import type {SupportedTimeZonesResponse} from './supportedTimeZonesResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSupportedTimeZonesResponse(writer: SerializationWriter, supportedTimeZonesResponse: SupportedTimeZonesResponse | undefined = {} as SupportedTimeZonesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, supportedTimeZonesResponse)
        writer.writeCollectionOfObjectValues<TimeZoneInformation>("value", supportedTimeZonesResponse.value, serializeTimeZoneInformation);
}
