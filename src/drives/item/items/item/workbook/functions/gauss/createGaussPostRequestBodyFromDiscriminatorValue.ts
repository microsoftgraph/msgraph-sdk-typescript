import {deserializeIntoGaussPostRequestBody} from './deserializeIntoGaussPostRequestBody';
import {GaussPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGaussPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGaussPostRequestBody;
}
