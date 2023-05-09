import {deserializeIntoEducationCategoryCollectionResponse} from './deserializeIntoEducationCategoryCollectionResponse';
import {EducationCategoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationCategoryCollectionResponse;
}
