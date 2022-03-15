import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmissionRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmissionRecipient();
}
