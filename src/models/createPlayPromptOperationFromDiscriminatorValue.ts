import { deserializeIntoPlayPromptOperation } from './deserializeIntoPlayPromptOperation';
import { type PlayPromptOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPlayPromptOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlayPromptOperation;
}
