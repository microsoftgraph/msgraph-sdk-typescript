import {EdgeSearchEngineBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdgeSearchEngineBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdgeSearchEngineBase();
}
