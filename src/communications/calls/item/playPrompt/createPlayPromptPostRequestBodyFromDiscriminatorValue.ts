import {deserializeIntoPlayPromptPostRequestBody} from './deserializeIntoPlayPromptPostRequestBody';
import {PlayPromptPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlayPromptPostRequestBody;
}
