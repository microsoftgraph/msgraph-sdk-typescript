import { deserializeIntoReplaceBPostRequestBody } from './deserializeIntoReplaceBPostRequestBody';
import { type ReplaceBPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReplaceBPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReplaceBPostRequestBody;
}
