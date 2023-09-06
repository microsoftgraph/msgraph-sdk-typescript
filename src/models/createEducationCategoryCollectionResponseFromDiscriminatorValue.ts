import { deserializeIntoEducationCategoryCollectionResponse } from './deserializeIntoEducationCategoryCollectionResponse';
import { type EducationCategoryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationCategoryCollectionResponse;
}
