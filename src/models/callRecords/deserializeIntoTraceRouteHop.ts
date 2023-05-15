import {TraceRouteHop} from './traceRouteHop';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTraceRouteHop(traceRouteHop: TraceRouteHop | undefined = {} as TraceRouteHop) : Record<string, (node: ParseNode) => void> {
    return {
        "hopCount": n => { traceRouteHop.hopCount = n.getNumberValue(); },
        "ipAddress": n => { traceRouteHop.ipAddress = n.getStringValue(); },
        "@odata.type": n => { traceRouteHop.odataType = n.getStringValue(); },
        "roundTripTime": n => { traceRouteHop.roundTripTime = n.getDurationValue(); },
    }
}
