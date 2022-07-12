import {TraceRouteHop} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTraceRouteHopFromDiscriminatorValue(parseNode: ParseNode | undefined) : TraceRouteHop {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TraceRouteHop();
}
