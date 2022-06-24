import {OnenoteEntityBaseModelImpl, OnenoteEntitySchemaObjectModelImpl, OnenoteResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntityBaseModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntityBaseModelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.onenoteEntitySchemaObjectModel":
                    return new OnenoteEntitySchemaObjectModelImpl();
                case "#microsoft.graph.onenoteResource":
                    return new OnenoteResourceImpl();
            }
        }
    }
    return new OnenoteEntityBaseModelImpl();
}
