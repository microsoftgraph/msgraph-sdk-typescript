import { RejectReason } from '../../../../models/rejectReason';
import { type RejectPostRequestBody } from './rejectPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRejectPostRequestBody(rejectPostRequestBody: RejectPostRequestBody | undefined = {} as RejectPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "callbackUri": n => { rejectPostRequestBody.callbackUri = n.getStringValue(); },
        "reason": n => { rejectPostRequestBody.reason = n.getEnumValue<RejectReason>(RejectReason); },
    }
}
