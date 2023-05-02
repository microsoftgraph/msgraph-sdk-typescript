import {deserializeIntoTanPostRequestBody} from './deserializeIntoTanPostRequestBody';
import {TanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTanPostRequestBody;
}
