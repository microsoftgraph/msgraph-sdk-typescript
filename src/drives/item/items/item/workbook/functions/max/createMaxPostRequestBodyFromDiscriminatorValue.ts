import {deserializeIntoMaxPostRequestBody} from './deserializeIntoMaxPostRequestBody';
import {MaxPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMaxPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMaxPostRequestBody;
}
