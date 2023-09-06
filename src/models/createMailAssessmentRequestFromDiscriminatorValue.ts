import { deserializeIntoMailAssessmentRequest } from './deserializeIntoMailAssessmentRequest';
import { type MailAssessmentRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMailAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailAssessmentRequest;
}
