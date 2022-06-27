import {EdgeSearchEngineBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdgeSearchEngineBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdgeSearchEngineBaseImpl();
}
