import {OauthApplicationEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOauthApplicationEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : OauthApplicationEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OauthApplicationEvidence();
}
