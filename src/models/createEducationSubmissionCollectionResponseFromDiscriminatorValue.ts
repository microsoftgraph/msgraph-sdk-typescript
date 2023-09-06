import { deserializeIntoEducationSubmissionCollectionResponse } from './deserializeIntoEducationSubmissionCollectionResponse';
import { type EducationSubmissionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationSubmissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSubmissionCollectionResponse;
}
