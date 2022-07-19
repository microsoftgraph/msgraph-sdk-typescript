import {EdgeSearchEngine} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdgeSearchEngine {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdgeSearchEngine();
}
