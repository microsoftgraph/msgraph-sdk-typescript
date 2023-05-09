import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {PlayPromptOperation} from './playPromptOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlayPromptOperation(playPromptOperation: PlayPromptOperation | undefined = {} as PlayPromptOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(playPromptOperation),
    }
}
