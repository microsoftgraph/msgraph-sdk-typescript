import {EducationAssignmentRecipient} from './educationAssignmentRecipient';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentRecipient();
}
