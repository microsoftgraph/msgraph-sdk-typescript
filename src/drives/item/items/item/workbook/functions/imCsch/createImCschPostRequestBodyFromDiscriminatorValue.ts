import {deserializeIntoImCschPostRequestBody} from './deserializeIntoImCschPostRequestBody';
import {ImCschPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImCschPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImCschPostRequestBody;
}
