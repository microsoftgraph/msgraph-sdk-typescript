import {deserializeIntoImTanPostRequestBody} from './deserializeIntoImTanPostRequestBody';
import {ImTanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImTanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImTanPostRequestBody;
}
