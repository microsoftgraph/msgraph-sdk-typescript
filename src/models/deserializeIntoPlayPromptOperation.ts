import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import type {PlayPromptOperation} from './playPromptOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlayPromptOperation(playPromptOperation: PlayPromptOperation | undefined = {} as PlayPromptOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(playPromptOperation),
    }
}
