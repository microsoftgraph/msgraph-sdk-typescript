import {createRecipientFromDiscriminatorValue} from '../../../../../../../../../../models/createRecipientFromDiscriminatorValue';
import {Recipient} from '../../../../../../../../../../models/recipient';
import {serializeRecipient} from '../../../../../../../../../../models/serializeRecipient';
import {ForwardPostRequestBody} from './forwardPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoForwardPostRequestBody(forwardPostRequestBody: ForwardPostRequestBody | undefined = {} as ForwardPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { forwardPostRequestBody.comment = n.getStringValue(); },
        "toRecipients": n => { forwardPostRequestBody.toRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
    }
}
