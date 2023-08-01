import type {CheckinPostRequestBody} from './checkinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckinPostRequestBody(checkinPostRequestBody: CheckinPostRequestBody | undefined = {} as CheckinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "checkInAs": n => { checkinPostRequestBody.checkInAs = n.getStringValue(); },
        "comment": n => { checkinPostRequestBody.comment = n.getStringValue(); },
    }
}
