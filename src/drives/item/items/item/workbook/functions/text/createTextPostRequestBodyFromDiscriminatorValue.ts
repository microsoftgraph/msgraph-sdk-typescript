import {deserializeIntoTextPostRequestBody} from './deserializeIntoTextPostRequestBody';
import {TextPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTextPostRequestBody;
}
