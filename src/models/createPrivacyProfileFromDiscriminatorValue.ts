import { deserializeIntoPrivacyProfile } from './deserializeIntoPrivacyProfile';
import { type PrivacyProfile } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrivacyProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrivacyProfile;
}
