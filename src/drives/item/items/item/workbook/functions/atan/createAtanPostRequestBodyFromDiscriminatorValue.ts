import {deserializeIntoAtanPostRequestBody} from './deserializeIntoAtanPostRequestBody';
import {AtanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAtanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAtanPostRequestBody;
}
