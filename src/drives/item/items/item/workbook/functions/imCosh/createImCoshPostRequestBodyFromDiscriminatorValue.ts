import {deserializeIntoImCoshPostRequestBody} from './deserializeIntoImCoshPostRequestBody';
import {ImCoshPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImCoshPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImCoshPostRequestBody;
}
