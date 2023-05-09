import {deserializeIntoCopyToDefaultContentLocationPostRequestBody} from './deserializeIntoCopyToDefaultContentLocationPostRequestBody';
import {CopyToDefaultContentLocationPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToDefaultContentLocationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyToDefaultContentLocationPostRequestBody;
}
