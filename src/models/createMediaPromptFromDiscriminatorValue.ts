import { deserializeIntoMediaPrompt } from './deserializeIntoMediaPrompt';
import { type MediaPrompt } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaPromptFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaPrompt;
}
