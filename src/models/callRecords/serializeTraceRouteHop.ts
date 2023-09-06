import { type TraceRouteHop } from './traceRouteHop';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTraceRouteHop(writer: SerializationWriter, traceRouteHop: TraceRouteHop | undefined = {} as TraceRouteHop) : void {
        writer.writeNumberValue("hopCount", traceRouteHop.hopCount);
        writer.writeStringValue("ipAddress", traceRouteHop.ipAddress);
        writer.writeStringValue("@odata.type", traceRouteHop.odataType);
        writer.writeDurationValue("roundTripTime", traceRouteHop.roundTripTime);
        writer.writeAdditionalData(traceRouteHop.additionalData);
}
