import {RejectReason} from '../../../../models/rejectReason';
import type {RejectPostRequestBody} from './rejectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRejectPostRequestBody(writer: SerializationWriter, rejectPostRequestBody: RejectPostRequestBody | undefined = {} as RejectPostRequestBody) : void {
        writer.writeStringValue("callbackUri", rejectPostRequestBody.callbackUri);
        writer.writeEnumValue<RejectReason>("reason", rejectPostRequestBody.reason);
        writer.writeAdditionalData(rejectPostRequestBody.additionalData);
}
