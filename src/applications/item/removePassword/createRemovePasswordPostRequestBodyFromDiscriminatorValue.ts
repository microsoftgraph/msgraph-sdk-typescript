import {deserializeIntoRemovePasswordPostRequestBody} from './deserializeIntoRemovePasswordPostRequestBody';
import {RemovePasswordPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemovePasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemovePasswordPostRequestBody;
}
