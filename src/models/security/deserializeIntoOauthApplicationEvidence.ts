import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {OauthApplicationEvidence} from './oauthApplicationEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOauthApplicationEvidence(oauthApplicationEvidence: OauthApplicationEvidence | undefined = {} as OauthApplicationEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(oauthApplicationEvidence),
        "appId": n => { oauthApplicationEvidence.appId = n.getStringValue(); },
        "displayName": n => { oauthApplicationEvidence.displayName = n.getStringValue(); },
        "objectId": n => { oauthApplicationEvidence.objectId = n.getStringValue(); },
        "publisher": n => { oauthApplicationEvidence.publisher = n.getStringValue(); },
    }
}
