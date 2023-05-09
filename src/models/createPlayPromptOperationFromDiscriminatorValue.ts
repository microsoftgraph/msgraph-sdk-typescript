import {deserializeIntoPlayPromptOperation} from './deserializeIntoPlayPromptOperation';
import {PlayPromptOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlayPromptOperation;
}
