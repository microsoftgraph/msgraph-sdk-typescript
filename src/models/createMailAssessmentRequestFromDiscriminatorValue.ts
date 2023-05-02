import {deserializeIntoMailAssessmentRequest} from './deserializeIntoMailAssessmentRequest';
import {MailAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailAssessmentRequest;
}
