import {TraceRouteHopCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTraceRouteHopCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TraceRouteHopCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TraceRouteHopCollectionResponse();
}
