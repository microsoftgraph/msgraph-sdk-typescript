import {deserializeIntoEducationAssignmentCollectionResponse} from './deserializeIntoEducationAssignmentCollectionResponse';
import {EducationAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentCollectionResponse;
}
