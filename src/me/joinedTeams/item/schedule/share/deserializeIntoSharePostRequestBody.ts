import {SharePostRequestBody} from './sharePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharePostRequestBody(sharePostRequestBody: SharePostRequestBody | undefined = {} as SharePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { sharePostRequestBody.endDateTime = n.getDateValue(); },
        "notifyTeam": n => { sharePostRequestBody.notifyTeam = n.getBooleanValue(); },
        "startDateTime": n => { sharePostRequestBody.startDateTime = n.getDateValue(); },
    }
}
