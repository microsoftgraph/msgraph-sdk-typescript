import {PlayPromptPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlayPromptPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlayPromptPostRequestBody();
}
