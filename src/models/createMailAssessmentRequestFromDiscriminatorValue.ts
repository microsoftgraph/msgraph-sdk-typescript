import {MailAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailAssessmentRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailAssessmentRequest();
}
