import { deserializeIntoNotebook } from './deserializeIntoNotebook';
import { deserializeIntoOnenoteEntityHierarchyModel } from './deserializeIntoOnenoteEntityHierarchyModel';
import { deserializeIntoOnenoteSection } from './deserializeIntoOnenoteSection';
import { deserializeIntoSectionGroup } from './deserializeIntoSectionGroup';
import { type Notebook, type OnenoteEntityHierarchyModel, type OnenoteSection, type SectionGroup } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenoteEntityHierarchyModelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.notebook":
                    return deserializeIntoNotebook;
                case "#microsoft.graph.onenoteSection":
                    return deserializeIntoOnenoteSection;
                case "#microsoft.graph.sectionGroup":
                    return deserializeIntoSectionGroup;
            }
        }
    }
    return deserializeIntoOnenoteEntityHierarchyModel;
}
