import {deserializeIntoDstDevPPostRequestBody} from './deserializeIntoDstDevPPostRequestBody';
import {DstDevPPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDstDevPPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDstDevPPostRequestBody;
}
