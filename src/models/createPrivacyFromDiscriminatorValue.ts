import {PrivacyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivacyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrivacyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrivacyImpl();
}
