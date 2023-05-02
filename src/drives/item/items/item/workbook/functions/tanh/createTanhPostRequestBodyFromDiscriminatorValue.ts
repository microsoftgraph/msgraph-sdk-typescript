import {deserializeIntoTanhPostRequestBody} from './deserializeIntoTanhPostRequestBody';
import {TanhPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTanhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTanhPostRequestBody;
}
