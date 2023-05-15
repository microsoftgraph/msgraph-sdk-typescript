import {Approval} from './approval';
import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {deserializeIntoRequest} from './deserializeIntoRequest';
import {serializeApproval} from './serializeApproval';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserConsentRequest(userConsentRequest: UserConsentRequest | undefined = {} as UserConsentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRequest(userConsentRequest),
        "approval": n => { userConsentRequest.approval = n.getObjectValue<Approval>(createApprovalFromDiscriminatorValue); },
        "reason": n => { userConsentRequest.reason = n.getStringValue(); },
    }
}
