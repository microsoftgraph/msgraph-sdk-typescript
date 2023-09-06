import { deserializeIntoChoosePostRequestBody } from './deserializeIntoChoosePostRequestBody';
import { type ChoosePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChoosePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChoosePostRequestBody;
}
