import { deserializeIntoEducationSchoolCollectionResponse } from './deserializeIntoEducationSchoolCollectionResponse';
import { type EducationSchoolCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationSchoolCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSchoolCollectionResponse;
}
