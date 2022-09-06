import {EdgeSearchEngine, EdgeSearchEngineBase, EdgeSearchEngineCustom} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdgeSearchEngineBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.edgeSearchEngine":
                    return new EdgeSearchEngine();
                case "#microsoft.graph.edgeSearchEngineCustom":
                    return new EdgeSearchEngineCustom();
            }
        }
    }
    return new EdgeSearchEngineBase();
}
