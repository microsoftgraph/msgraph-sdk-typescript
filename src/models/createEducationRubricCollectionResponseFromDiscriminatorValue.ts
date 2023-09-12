import { deserializeIntoEducationRubricCollectionResponse } from './deserializeIntoEducationRubricCollectionResponse';
import { type EducationRubricCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationRubricCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationRubricCollectionResponse;
}
