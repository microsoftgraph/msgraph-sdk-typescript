import {deserializeIntoDstDevPostRequestBody} from './deserializeIntoDstDevPostRequestBody';
import {DstDevPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDstDevPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDstDevPostRequestBody;
}
