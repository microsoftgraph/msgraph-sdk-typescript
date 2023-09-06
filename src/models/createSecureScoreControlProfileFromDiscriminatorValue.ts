import { deserializeIntoSecureScoreControlProfile } from './deserializeIntoSecureScoreControlProfile';
import { type SecureScoreControlProfile } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecureScoreControlProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScoreControlProfile;
}
