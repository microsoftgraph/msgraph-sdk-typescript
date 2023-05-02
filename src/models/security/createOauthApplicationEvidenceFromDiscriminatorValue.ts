import {deserializeIntoOauthApplicationEvidence} from './deserializeIntoOauthApplicationEvidence';
import {OauthApplicationEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOauthApplicationEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOauthApplicationEvidence;
}
