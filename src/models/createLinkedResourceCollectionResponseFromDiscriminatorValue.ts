import {deserializeIntoLinkedResourceCollectionResponse} from './deserializeIntoLinkedResourceCollectionResponse';
import {LinkedResourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLinkedResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLinkedResourceCollectionResponse;
}
