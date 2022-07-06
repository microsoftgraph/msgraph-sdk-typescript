import {EducationAssignmentClassRecipient, EducationAssignmentGroupRecipient, EducationAssignmentIndividualRecipient, EducationAssignmentRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationAssignmentClassRecipient":
                    return new EducationAssignmentClassRecipient();
                case "#microsoft.graph.educationAssignmentGroupRecipient":
                    return new EducationAssignmentGroupRecipient();
                case "#microsoft.graph.educationAssignmentIndividualRecipient":
                    return new EducationAssignmentIndividualRecipient();
            }
        }
    }
    return new EducationAssignmentRecipient();
}
