import {deserializeIntoEducationAssignmentClassRecipient} from './deserializeIntoEducationAssignmentClassRecipient';
import {deserializeIntoEducationAssignmentGroupRecipient} from './deserializeIntoEducationAssignmentGroupRecipient';
import {deserializeIntoEducationAssignmentIndividualRecipient} from './deserializeIntoEducationAssignmentIndividualRecipient';
import {deserializeIntoEducationAssignmentRecipient} from './deserializeIntoEducationAssignmentRecipient';
import {EducationAssignmentClassRecipient, EducationAssignmentGroupRecipient, EducationAssignmentIndividualRecipient, EducationAssignmentRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationAssignmentClassRecipient":
                    return deserializeIntoEducationAssignmentClassRecipient;
                case "#microsoft.graph.educationAssignmentGroupRecipient":
                    return deserializeIntoEducationAssignmentGroupRecipient;
                case "#microsoft.graph.educationAssignmentIndividualRecipient":
                    return deserializeIntoEducationAssignmentIndividualRecipient;
            }
        }
    }
    return deserializeIntoEducationAssignmentRecipient;
}
