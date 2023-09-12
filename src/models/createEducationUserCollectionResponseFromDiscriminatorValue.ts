import { deserializeIntoEducationUserCollectionResponse } from './deserializeIntoEducationUserCollectionResponse';
import { type EducationUserCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationUserCollectionResponse;
}
