import {deserializeIntoPostCollectionResponse} from './deserializeIntoPostCollectionResponse';
import {PostCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPostCollectionResponse;
}
