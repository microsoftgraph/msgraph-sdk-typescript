import type {TraceRouteHop} from './traceRouteHop';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function serializeTraceRouteHop(writer: SerializationWriter, traceRouteHop: TraceRouteHop | undefined = {} as TraceRouteHop) : void {
        writer.writeNumberValue("hopCount", traceRouteHop.hopCount);
        writer.writeStringValue("ipAddress", traceRouteHop.ipAddress);
        writer.writeStringValue("@odata.type", traceRouteHop.odataType);
        writer.writeDurationValue("roundTripTime", traceRouteHop.roundTripTime);
        writer.writeAdditionalData(traceRouteHop.additionalData);
}
