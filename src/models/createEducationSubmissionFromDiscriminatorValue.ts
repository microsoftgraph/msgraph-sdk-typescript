import {deserializeIntoEducationSubmission} from './deserializeIntoEducationSubmission';
import {EducationSubmission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSubmission;
}
