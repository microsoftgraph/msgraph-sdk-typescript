import {EducationClassCollectionResponse} from './educationClassCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationClassCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationClassCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationClassCollectionResponse();
}
