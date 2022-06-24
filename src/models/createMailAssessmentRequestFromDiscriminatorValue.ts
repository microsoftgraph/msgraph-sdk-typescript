import {MailAssessmentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailAssessmentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailAssessmentRequestImpl();
}
