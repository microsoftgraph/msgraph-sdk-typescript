import {deserializeIntoMediaPrompt} from './deserializeIntoMediaPrompt';
import {MediaPrompt} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaPromptFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaPrompt;
}
