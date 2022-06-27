import {EdgeSearchEngineBaseImpl, EdgeSearchEngineCustomImpl, EdgeSearchEngineImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdgeSearchEngineBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdgeSearchEngineBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.edgeSearchEngine":
                    return new EdgeSearchEngineImpl();
                case "#microsoft.graph.edgeSearchEngineCustom":
                    return new EdgeSearchEngineCustomImpl();
            }
        }
    }
    return new EdgeSearchEngineBaseImpl();
}
