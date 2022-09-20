import {Notebook, OnenoteEntityHierarchyModel, OnenoteEntitySchemaObjectModel, OnenotePage, OnenoteSection, SectionGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntitySchemaObjectModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntitySchemaObjectModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.notebook":
                    return new Notebook();
                case "#microsoft.graph.onenoteEntityHierarchyModel":
                    return new OnenoteEntityHierarchyModel();
                case "#microsoft.graph.onenotePage":
                    return new OnenotePage();
                case "#microsoft.graph.onenoteSection":
                    return new OnenoteSection();
                case "#microsoft.graph.sectionGroup":
                    return new SectionGroup();
            }
        }
    }
    return new OnenoteEntitySchemaObjectModel();
}
