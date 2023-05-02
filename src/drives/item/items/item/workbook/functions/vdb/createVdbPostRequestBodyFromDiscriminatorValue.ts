import {deserializeIntoVdbPostRequestBody} from './deserializeIntoVdbPostRequestBody';
import {VdbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVdbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVdbPostRequestBody;
}
