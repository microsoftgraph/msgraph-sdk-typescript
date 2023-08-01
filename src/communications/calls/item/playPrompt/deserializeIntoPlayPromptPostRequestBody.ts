import {createPromptFromDiscriminatorValue} from '../../../../models/createPromptFromDiscriminatorValue';
import type {Prompt} from '../../../../models/prompt';
import {serializePrompt} from '../../../../models/serializePrompt';
import type {PlayPromptPostRequestBody} from './playPromptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlayPromptPostRequestBody(playPromptPostRequestBody: PlayPromptPostRequestBody | undefined = {} as PlayPromptPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { playPromptPostRequestBody.clientContext = n.getStringValue(); },
        "prompts": n => { playPromptPostRequestBody.prompts = n.getCollectionOfObjectValues<Prompt>(createPromptFromDiscriminatorValue); },
    }
}
