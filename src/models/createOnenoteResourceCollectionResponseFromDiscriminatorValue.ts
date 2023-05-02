import {deserializeIntoOnenoteResourceCollectionResponse} from './deserializeIntoOnenoteResourceCollectionResponse';
import {OnenoteResourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteResourceCollectionResponse;
}
