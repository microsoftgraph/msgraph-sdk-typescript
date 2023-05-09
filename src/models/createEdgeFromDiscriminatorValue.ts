import {deserializeIntoEdge} from './deserializeIntoEdge';
import {Edge} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdge;
}
