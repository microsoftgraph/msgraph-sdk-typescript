import {deserializeIntoEducationSchoolCollectionResponse} from './deserializeIntoEducationSchoolCollectionResponse';
import {EducationSchoolCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSchoolCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSchoolCollectionResponse;
}
