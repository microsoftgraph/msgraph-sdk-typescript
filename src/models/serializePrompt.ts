import { type Prompt } from './prompt';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrompt(writer: SerializationWriter, prompt: Prompt | undefined = {} as Prompt) : void {
        writer.writeStringValue("@odata.type", prompt.odataType);
        writer.writeAdditionalData(prompt.additionalData);
}
