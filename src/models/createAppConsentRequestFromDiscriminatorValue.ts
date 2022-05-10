import {AppConsentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConsentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConsentRequestImpl();
}
