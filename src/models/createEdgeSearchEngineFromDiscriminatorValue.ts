import { deserializeIntoEdgeSearchEngine } from './deserializeIntoEdgeSearchEngine';
import { type EdgeSearchEngine } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdgeSearchEngine;
}
