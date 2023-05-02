import {deserializeIntoSecureScoreControlProfile} from './deserializeIntoSecureScoreControlProfile';
import {SecureScoreControlProfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScoreControlProfile;
}
