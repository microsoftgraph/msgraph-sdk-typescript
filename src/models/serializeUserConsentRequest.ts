import {Approval} from './approval';
import {serializeApproval} from './serializeApproval';
import {serializeRequest} from './serializeRequest';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserConsentRequest(writer: SerializationWriter, userConsentRequest: UserConsentRequest | undefined = {} as UserConsentRequest) : void {
        serializeRequest(writer, userConsentRequest)
        writer.writeObjectValue<Approval>("approval", userConsentRequest.approval, serializeApproval);
        writer.writeStringValue("reason", userConsentRequest.reason);
}
