import {deserializeIntoIntelligenceProfile} from './deserializeIntoIntelligenceProfile';
import {IntelligenceProfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntelligenceProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntelligenceProfile;
}
