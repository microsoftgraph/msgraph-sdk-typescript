import {deserializeIntoEducationSubmissionCollectionResponse} from './deserializeIntoEducationSubmissionCollectionResponse';
import {EducationSubmissionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSubmissionCollectionResponse;
}
