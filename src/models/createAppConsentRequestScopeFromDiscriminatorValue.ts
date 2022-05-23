import {AppConsentRequestScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConsentRequestScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConsentRequestScopeImpl();
}
