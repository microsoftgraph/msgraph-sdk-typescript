import {TraceRouteHopImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTraceRouteHopFromDiscriminatorValue(parseNode: ParseNode | undefined) : TraceRouteHopImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TraceRouteHopImpl();
}
