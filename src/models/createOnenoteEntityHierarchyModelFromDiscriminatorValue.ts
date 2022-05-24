import {OnenoteEntityHierarchyModelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntityHierarchyModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntityHierarchyModelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.onenoteEntityHierarchyModel":
                    return new OnenoteEntityHierarchyModelImpl();
            }
        }
    }
    return new OnenoteEntityHierarchyModelImpl();
}
