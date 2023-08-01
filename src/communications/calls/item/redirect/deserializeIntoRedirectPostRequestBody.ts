import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import type {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';
import {serializeInvitationParticipantInfo} from '../../../../models/serializeInvitationParticipantInfo';
import type {RedirectPostRequestBody} from './redirectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRedirectPostRequestBody(redirectPostRequestBody: RedirectPostRequestBody | undefined = {} as RedirectPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "callbackUri": n => { redirectPostRequestBody.callbackUri = n.getStringValue(); },
        "targets": n => { redirectPostRequestBody.targets = n.getCollectionOfObjectValues<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
        "timeout": n => { redirectPostRequestBody.timeout = n.getNumberValue(); },
    }
}
