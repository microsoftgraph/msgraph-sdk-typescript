import {OnenoteEntityBaseModel, OnenoteEntitySchemaObjectModel, OnenoteResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntityBaseModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntityBaseModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.onenoteEntitySchemaObjectModel":
                    return new OnenoteEntitySchemaObjectModel();
                case "#microsoft.graph.onenoteResource":
                    return new OnenoteResource();
            }
        }
    }
    return new OnenoteEntityBaseModel();
}
