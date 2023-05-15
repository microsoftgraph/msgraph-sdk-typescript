import {deserializeIntoImSqrtPostRequestBody} from './deserializeIntoImSqrtPostRequestBody';
import {ImSqrtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImSqrtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImSqrtPostRequestBody;
}
