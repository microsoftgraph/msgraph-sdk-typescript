import {deserializeIntoEducationClassCollectionResponse} from './deserializeIntoEducationClassCollectionResponse';
import {EducationClassCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationClassCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationClassCollectionResponse;
}
