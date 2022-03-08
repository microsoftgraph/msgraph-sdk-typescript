import {PlayPromptRequestBody} from './playPromptRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlayPromptRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlayPromptRequestBody();
}
