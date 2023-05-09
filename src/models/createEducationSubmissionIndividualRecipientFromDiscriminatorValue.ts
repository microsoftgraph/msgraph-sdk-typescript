import {deserializeIntoEducationSubmissionIndividualRecipient} from './deserializeIntoEducationSubmissionIndividualRecipient';
import {EducationSubmissionIndividualRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionIndividualRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSubmissionIndividualRecipient;
}
