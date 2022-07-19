import {EdiscoveryCaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryCaseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryCaseCollectionResponse();
}
