import { type StopHoldMusicPostRequestBody } from './stopHoldMusicPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStopHoldMusicPostRequestBody(writer: SerializationWriter, stopHoldMusicPostRequestBody: StopHoldMusicPostRequestBody | undefined = {} as StopHoldMusicPostRequestBody) : void {
        writer.writeStringValue("clientContext", stopHoldMusicPostRequestBody.clientContext);
        writer.writeAdditionalData(stopHoldMusicPostRequestBody.additionalData);
}
