import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type OauthApplicationEvidence } from './oauthApplicationEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOauthApplicationEvidence(oauthApplicationEvidence: OauthApplicationEvidence | undefined = {} as OauthApplicationEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(oauthApplicationEvidence),
        "appId": n => { oauthApplicationEvidence.appId = n.getStringValue(); },
        "displayName": n => { oauthApplicationEvidence.displayName = n.getStringValue(); },
        "objectId": n => { oauthApplicationEvidence.objectId = n.getStringValue(); },
        "publisher": n => { oauthApplicationEvidence.publisher = n.getStringValue(); },
    }
}
