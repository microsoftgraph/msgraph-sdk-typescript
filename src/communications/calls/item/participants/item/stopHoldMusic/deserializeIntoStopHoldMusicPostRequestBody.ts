import type {StopHoldMusicPostRequestBody} from './stopHoldMusicPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStopHoldMusicPostRequestBody(stopHoldMusicPostRequestBody: StopHoldMusicPostRequestBody | undefined = {} as StopHoldMusicPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { stopHoldMusicPostRequestBody.clientContext = n.getStringValue(); },
    }
}
