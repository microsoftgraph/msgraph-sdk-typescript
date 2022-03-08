import {AppConsentRequestScope} from './appConsentRequestScope';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConsentRequestScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConsentRequestScope();
}
