import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import {deserializeIntoOnenoteEntitySchemaObjectModel} from './deserializeIntoOnenoteEntitySchemaObjectModel';
import {deserializeIntoOnenotePage} from './deserializeIntoOnenotePage';
import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {deserializeIntoSectionGroup} from './deserializeIntoSectionGroup';
import {Notebook, OnenoteEntityHierarchyModel, OnenoteEntitySchemaObjectModel, OnenotePage, OnenoteSection, SectionGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntitySchemaObjectModelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.notebook":
                    return deserializeIntoNotebook;
                case "#microsoft.graph.onenoteEntityHierarchyModel":
                    return deserializeIntoOnenoteEntityHierarchyModel;
                case "#microsoft.graph.onenotePage":
                    return deserializeIntoOnenotePage;
                case "#microsoft.graph.onenoteSection":
                    return deserializeIntoOnenoteSection;
                case "#microsoft.graph.sectionGroup":
                    return deserializeIntoSectionGroup;
            }
        }
    }
    return deserializeIntoOnenoteEntitySchemaObjectModel;
}
