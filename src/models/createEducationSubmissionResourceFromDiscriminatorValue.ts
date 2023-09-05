import { deserializeIntoEducationSubmissionResource } from './deserializeIntoEducationSubmissionResource';
import { type EducationSubmissionResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationSubmissionResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSubmissionResource;
}
