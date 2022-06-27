import {EducationSubmissionRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSubmissionRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSubmissionRecipientImpl();
}
