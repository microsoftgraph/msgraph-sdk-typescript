import {deserializeIntoImSumPostRequestBody} from './deserializeIntoImSumPostRequestBody';
import {ImSumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImSumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImSumPostRequestBody;
}
