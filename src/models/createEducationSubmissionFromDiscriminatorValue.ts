import { deserializeIntoEducationSubmission } from './deserializeIntoEducationSubmission';
import { type EducationSubmission } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationSubmissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSubmission;
}
