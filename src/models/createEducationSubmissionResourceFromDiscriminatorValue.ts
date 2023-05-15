import {deserializeIntoEducationSubmissionResource} from './deserializeIntoEducationSubmissionResource';
import {EducationSubmissionResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSubmissionResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSubmissionResource;
}
