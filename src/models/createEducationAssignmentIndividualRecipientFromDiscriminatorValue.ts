import {EducationAssignmentIndividualRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentIndividualRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentIndividualRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentIndividualRecipient();
}
