import {deserializeIntoEducationAssignmentIndividualRecipient} from './deserializeIntoEducationAssignmentIndividualRecipient';
import {EducationAssignmentIndividualRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentIndividualRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentIndividualRecipient;
}
