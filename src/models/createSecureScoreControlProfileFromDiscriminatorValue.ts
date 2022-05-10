import {SecureScoreControlProfileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreControlProfileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreControlProfileImpl();
}
