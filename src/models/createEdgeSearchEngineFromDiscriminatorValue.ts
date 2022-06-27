import {EdgeSearchEngineImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdgeSearchEngineImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdgeSearchEngineImpl();
}
