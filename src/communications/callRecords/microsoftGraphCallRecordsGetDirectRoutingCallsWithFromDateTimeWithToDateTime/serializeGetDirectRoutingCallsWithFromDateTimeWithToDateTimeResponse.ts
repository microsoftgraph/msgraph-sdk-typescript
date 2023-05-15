import {DirectRoutingLogRow} from '../../../models/callRecords/directRoutingLogRow';
import {serializeDirectRoutingLogRow} from '../../../models/callRecords/serializeDirectRoutingLogRow';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse(writer: SerializationWriter, getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse: GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse | undefined = {} as GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse)
        writer.writeCollectionOfObjectValues<DirectRoutingLogRow>("value", getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse.value, serializeDirectRoutingLogRow);
}
