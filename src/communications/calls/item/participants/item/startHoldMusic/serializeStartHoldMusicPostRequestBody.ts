import {Prompt} from '../../../../../../models/prompt';
import {serializePrompt} from '../../../../../../models/serializePrompt';
import {StartHoldMusicPostRequestBody} from './startHoldMusicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStartHoldMusicPostRequestBody(writer: SerializationWriter, startHoldMusicPostRequestBody: StartHoldMusicPostRequestBody | undefined = {} as StartHoldMusicPostRequestBody) : void {
        writer.writeStringValue("clientContext", startHoldMusicPostRequestBody.clientContext);
        writer.writeObjectValue<Prompt>("customPrompt", startHoldMusicPostRequestBody.customPrompt, serializePrompt);
        writer.writeAdditionalData(startHoldMusicPostRequestBody.additionalData);
}
