import { deserializeIntoPlayPromptPostRequestBody } from './deserializeIntoPlayPromptPostRequestBody';
import { type PlayPromptPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlayPromptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlayPromptPostRequestBody;
}
