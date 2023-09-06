import { deserializeIntoEducationSubmissionIndividualRecipient } from './deserializeIntoEducationSubmissionIndividualRecipient';
import { type EducationSubmissionIndividualRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationSubmissionIndividualRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSubmissionIndividualRecipient;
}
