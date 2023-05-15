import {RejectReason} from '../../../../models/rejectReason';
import {RejectPostRequestBody} from './rejectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRejectPostRequestBody(rejectPostRequestBody: RejectPostRequestBody | undefined = {} as RejectPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "callbackUri": n => { rejectPostRequestBody.callbackUri = n.getStringValue(); },
        "reason": n => { rejectPostRequestBody.reason = n.getEnumValue<RejectReason>(RejectReason); },
    }
}
