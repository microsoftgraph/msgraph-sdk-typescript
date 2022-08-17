import {EducationSubmissionIndividualRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionIndividualRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmissionIndividualRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmissionIndividualRecipient();
}
