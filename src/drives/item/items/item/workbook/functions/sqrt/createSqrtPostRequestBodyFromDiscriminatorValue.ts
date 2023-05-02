import {deserializeIntoSqrtPostRequestBody} from './deserializeIntoSqrtPostRequestBody';
import {SqrtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSqrtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSqrtPostRequestBody;
}
