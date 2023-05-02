import {deserializeIntoTPostRequestBody} from './deserializeIntoTPostRequestBody';
import {TPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTPostRequestBody;
}
