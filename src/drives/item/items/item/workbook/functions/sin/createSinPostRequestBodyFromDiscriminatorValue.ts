import {deserializeIntoSinPostRequestBody} from './deserializeIntoSinPostRequestBody';
import {SinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSinPostRequestBody;
}
