import {deserializeIntoImRealPostRequestBody} from './deserializeIntoImRealPostRequestBody';
import {ImRealPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImRealPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImRealPostRequestBody;
}
