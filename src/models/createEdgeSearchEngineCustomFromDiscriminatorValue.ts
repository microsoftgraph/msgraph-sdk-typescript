import { deserializeIntoEdgeSearchEngineCustom } from './deserializeIntoEdgeSearchEngineCustom';
import { type EdgeSearchEngineCustom } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineCustomFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdgeSearchEngineCustom;
}
