import {EdgeSearchEngineCustomImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineCustomFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdgeSearchEngineCustomImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdgeSearchEngineCustomImpl();
}
