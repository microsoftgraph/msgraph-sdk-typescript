import {deserializeIntoEducationRubricCollectionResponse} from './deserializeIntoEducationRubricCollectionResponse';
import {EducationRubricCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRubricCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationRubricCollectionResponse;
}
