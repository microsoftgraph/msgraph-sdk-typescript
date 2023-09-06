import { deserializeIntoFileAssessmentRequest } from './deserializeIntoFileAssessmentRequest';
import { type FileAssessmentRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFileAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileAssessmentRequest;
}
