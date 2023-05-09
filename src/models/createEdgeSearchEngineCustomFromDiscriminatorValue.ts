import {deserializeIntoEdgeSearchEngineCustom} from './deserializeIntoEdgeSearchEngineCustom';
import {EdgeSearchEngineCustom} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineCustomFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdgeSearchEngineCustom;
}
