import {EducationAssignmentClassRecipientImpl, EducationAssignmentGroupRecipientImpl, EducationAssignmentIndividualRecipientImpl, EducationAssignmentRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationAssignmentClassRecipient":
                    return new EducationAssignmentClassRecipientImpl();
                case "#microsoft.graph.educationAssignmentGroupRecipient":
                    return new EducationAssignmentGroupRecipientImpl();
                case "#microsoft.graph.educationAssignmentIndividualRecipient":
                    return new EducationAssignmentIndividualRecipientImpl();
            }
        }
    }
    return new EducationAssignmentRecipientImpl();
}
