import {Edge} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Edge {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Edge();
}
