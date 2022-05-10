import {PlayPromptRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlayPromptRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlayPromptRequestBodyImpl();
}
