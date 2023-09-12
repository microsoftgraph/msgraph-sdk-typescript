import { deserializeIntoTraceRouteHop } from './deserializeIntoTraceRouteHop';
import { type TraceRouteHop } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTraceRouteHopFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTraceRouteHop;
}
