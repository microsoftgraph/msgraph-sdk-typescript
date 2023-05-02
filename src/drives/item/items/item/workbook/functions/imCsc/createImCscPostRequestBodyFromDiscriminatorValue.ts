import {deserializeIntoImCscPostRequestBody} from './deserializeIntoImCscPostRequestBody';
import {ImCscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImCscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImCscPostRequestBody;
}
