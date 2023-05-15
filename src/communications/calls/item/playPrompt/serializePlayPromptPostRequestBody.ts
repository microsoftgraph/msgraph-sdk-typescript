import {Prompt} from '../../../../models/prompt';
import {serializePrompt} from '../../../../models/serializePrompt';
import {PlayPromptPostRequestBody} from './playPromptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlayPromptPostRequestBody(writer: SerializationWriter, playPromptPostRequestBody: PlayPromptPostRequestBody | undefined = {} as PlayPromptPostRequestBody) : void {
        writer.writeStringValue("clientContext", playPromptPostRequestBody.clientContext);
        writer.writeCollectionOfObjectValues<Prompt>("prompts", playPromptPostRequestBody.prompts, serializePrompt);
        writer.writeAdditionalData(playPromptPostRequestBody.additionalData);
}
