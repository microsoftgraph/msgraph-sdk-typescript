import {PrivacyProfileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivacyProfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrivacyProfileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrivacyProfileImpl();
}
