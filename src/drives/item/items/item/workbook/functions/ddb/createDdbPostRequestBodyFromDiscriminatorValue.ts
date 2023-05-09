import {deserializeIntoDdbPostRequestBody} from './deserializeIntoDdbPostRequestBody';
import {DdbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDdbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDdbPostRequestBody;
}
