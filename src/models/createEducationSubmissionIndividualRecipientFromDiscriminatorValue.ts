import {EducationSubmissionIndividualRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionIndividualRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmissionIndividualRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmissionIndividualRecipientImpl();
}
