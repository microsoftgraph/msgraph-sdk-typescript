import { deserializeIntoEdge } from './deserializeIntoEdge';
import { type Edge } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdgeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdge;
}
