import {deserializeIntoOnenotePageCollectionResponse} from './deserializeIntoOnenotePageCollectionResponse';
import {OnenotePageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePageCollectionResponse;
}
