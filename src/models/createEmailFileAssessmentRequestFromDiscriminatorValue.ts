import {EmailFileAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailFileAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailFileAssessmentRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailFileAssessmentRequest();
}
