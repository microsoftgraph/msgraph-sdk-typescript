import {OauthApplicationEvidence} from './oauthApplicationEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOauthApplicationEvidence(writer: SerializationWriter, oauthApplicationEvidence: OauthApplicationEvidence | undefined = {} as OauthApplicationEvidence) : void {
        serializeAlertEvidence(writer, oauthApplicationEvidence)
        writer.writeStringValue("appId", oauthApplicationEvidence.appId);
        writer.writeStringValue("displayName", oauthApplicationEvidence.displayName);
        writer.writeStringValue("objectId", oauthApplicationEvidence.objectId);
        writer.writeStringValue("publisher", oauthApplicationEvidence.publisher);
}
