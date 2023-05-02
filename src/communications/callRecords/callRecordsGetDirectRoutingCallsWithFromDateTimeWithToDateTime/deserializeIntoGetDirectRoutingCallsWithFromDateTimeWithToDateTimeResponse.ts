import {createDirectRoutingLogRowFromDiscriminatorValue} from '../../../models/callRecords/createDirectRoutingLogRowFromDiscriminatorValue';
import {DirectRoutingLogRow} from '../../../models/callRecords/directRoutingLogRow';
import {serializeDirectRoutingLogRow} from '../../../models/callRecords/serializeDirectRoutingLogRow';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse(getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse: GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse | undefined = {} as GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse),
        "value": n => { getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse.value = n.getCollectionOfObjectValues<DirectRoutingLogRow>(createDirectRoutingLogRowFromDiscriminatorValue); },
    }
}
