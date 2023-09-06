import { type PlayPromptOperation } from './playPromptOperation';
import { serializeCommsOperation } from './serializeCommsOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlayPromptOperation(writer: SerializationWriter, playPromptOperation: PlayPromptOperation | undefined = {} as PlayPromptOperation) : void {
        serializeCommsOperation(writer, playPromptOperation)
}
