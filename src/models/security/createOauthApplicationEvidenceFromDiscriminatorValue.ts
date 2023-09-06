import { deserializeIntoOauthApplicationEvidence } from './deserializeIntoOauthApplicationEvidence';
import { type OauthApplicationEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOauthApplicationEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOauthApplicationEvidence;
}
