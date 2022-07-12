import {OnenoteEntityHierarchyModel, OnenoteEntitySchemaObjectModel, OnenotePage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntitySchemaObjectModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntitySchemaObjectModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.onenoteEntityHierarchyModel":
                    return new OnenoteEntityHierarchyModel();
                case "#microsoft.graph.onenotePage":
                    return new OnenotePage();
            }
        }
    }
    return new OnenoteEntitySchemaObjectModel();
}
