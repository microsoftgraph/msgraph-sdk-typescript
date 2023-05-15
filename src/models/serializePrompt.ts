import {Prompt} from './prompt';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrompt(writer: SerializationWriter, prompt: Prompt | undefined = {} as Prompt) : void {
        writer.writeStringValue("@odata.type", prompt.odataType);
        writer.writeAdditionalData(prompt.additionalData);
}
