import {StopHoldMusicPostRequestBody} from './stopHoldMusicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStopHoldMusicPostRequestBody(writer: SerializationWriter, stopHoldMusicPostRequestBody: StopHoldMusicPostRequestBody | undefined = {} as StopHoldMusicPostRequestBody) : void {
        writer.writeStringValue("clientContext", stopHoldMusicPostRequestBody.clientContext);
        writer.writeAdditionalData(stopHoldMusicPostRequestBody.additionalData);
}
