import {Recipient} from '../../../../../../../../../../../models/recipient';
import {serializeRecipient} from '../../../../../../../../../../../models/serializeRecipient';
import {ForwardPostRequestBody} from './forwardPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeForwardPostRequestBody(writer: SerializationWriter, forwardPostRequestBody: ForwardPostRequestBody | undefined = {} as ForwardPostRequestBody) : void {
        writer.writeStringValue("comment", forwardPostRequestBody.comment);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", forwardPostRequestBody.toRecipients, serializeRecipient);
        writer.writeAdditionalData(forwardPostRequestBody.additionalData);
}
