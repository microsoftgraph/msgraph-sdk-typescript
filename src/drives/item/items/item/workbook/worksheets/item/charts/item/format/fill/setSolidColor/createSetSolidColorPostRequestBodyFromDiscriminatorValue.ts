import { deserializeIntoSetSolidColorPostRequestBody } from './deserializeIntoSetSolidColorPostRequestBody';
import { type SetSolidColorPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetSolidColorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetSolidColorPostRequestBody;
}
