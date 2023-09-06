import { deserializeIntoEducationSubmissionIndividualRecipient } from './deserializeIntoEducationSubmissionIndividualRecipient';
import { deserializeIntoEducationSubmissionRecipient } from './deserializeIntoEducationSubmissionRecipient';
import { type EducationSubmissionIndividualRecipient, type EducationSubmissionRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationSubmissionRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationSubmissionIndividualRecipient":
                    return deserializeIntoEducationSubmissionIndividualRecipient;
            }
        }
    }
    return deserializeIntoEducationSubmissionRecipient;
}
