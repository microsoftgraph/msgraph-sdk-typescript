import {createDirectRoutingLogRowFromDiscriminatorValue} from '../../../models/callRecords/createDirectRoutingLogRowFromDiscriminatorValue';
import type {DirectRoutingLogRow} from '../../../models/callRecords/directRoutingLogRow';
import {serializeDirectRoutingLogRow} from '../../../models/callRecords/serializeDirectRoutingLogRow';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse} from './getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse(getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse: GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse | undefined = {} as GetDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse),
        "value": n => { getDirectRoutingCallsWithFromDateTimeWithToDateTimeResponse.value = n.getCollectionOfObjectValues<DirectRoutingLogRow>(createDirectRoutingLogRowFromDiscriminatorValue); },
    }
}
