import {deserializeIntoDvarPostRequestBody} from './deserializeIntoDvarPostRequestBody';
import {DvarPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDvarPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDvarPostRequestBody;
}
