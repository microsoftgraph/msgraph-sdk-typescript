import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {deserializeIntoOnenoteEntityBaseModel} from './deserializeIntoOnenoteEntityBaseModel';
import {deserializeIntoOnenoteEntityHierarchyModel} from './deserializeIntoOnenoteEntityHierarchyModel';
import {deserializeIntoOnenoteEntitySchemaObjectModel} from './deserializeIntoOnenoteEntitySchemaObjectModel';
import {deserializeIntoOnenotePage} from './deserializeIntoOnenotePage';
import {deserializeIntoOnenoteResource} from './deserializeIntoOnenoteResource';
import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {deserializeIntoSectionGroup} from './deserializeIntoSectionGroup';
import {Notebook, OnenoteEntityBaseModel, OnenoteEntityHierarchyModel, OnenoteEntitySchemaObjectModel, OnenotePage, OnenoteResource, OnenoteSection, SectionGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntityBaseModelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
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
                case "#microsoft.graph.onenoteEntitySchemaObjectModel":
                    return deserializeIntoOnenoteEntitySchemaObjectModel;
                case "#microsoft.graph.onenotePage":
                    return deserializeIntoOnenotePage;
                case "#microsoft.graph.onenoteResource":
                    return deserializeIntoOnenoteResource;
                case "#microsoft.graph.onenoteSection":
                    return deserializeIntoOnenoteSection;
                case "#microsoft.graph.sectionGroup":
                    return deserializeIntoSectionGroup;
            }
        }
    }
    return deserializeIntoOnenoteEntityBaseModel;
}
