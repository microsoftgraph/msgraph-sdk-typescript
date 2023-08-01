import {createPromptFromDiscriminatorValue} from '../../../../../../models/createPromptFromDiscriminatorValue';
import type {Prompt} from '../../../../../../models/prompt';
import {serializePrompt} from '../../../../../../models/serializePrompt';
import type {StartHoldMusicPostRequestBody} from './startHoldMusicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStartHoldMusicPostRequestBody(startHoldMusicPostRequestBody: StartHoldMusicPostRequestBody | undefined = {} as StartHoldMusicPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { startHoldMusicPostRequestBody.clientContext = n.getStringValue(); },
        "customPrompt": n => { startHoldMusicPostRequestBody.customPrompt = n.getObjectValue<Prompt>(createPromptFromDiscriminatorValue); },
    }
}
