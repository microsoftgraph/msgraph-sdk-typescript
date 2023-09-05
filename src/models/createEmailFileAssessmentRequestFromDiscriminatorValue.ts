import { deserializeIntoEmailFileAssessmentRequest } from './deserializeIntoEmailFileAssessmentRequest';
import { type EmailFileAssessmentRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmailFileAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailFileAssessmentRequest;
}
