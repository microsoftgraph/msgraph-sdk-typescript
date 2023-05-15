import {deserializeIntoRemoveKeyPostRequestBody} from './deserializeIntoRemoveKeyPostRequestBody';
import {RemoveKeyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveKeyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveKeyPostRequestBody;
}
