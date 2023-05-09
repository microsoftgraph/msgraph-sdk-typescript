import {deserializeIntoEdiscoveryCaseCollectionResponse} from './deserializeIntoEdiscoveryCaseCollectionResponse';
import {EdiscoveryCaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCaseCollectionResponse;
}
