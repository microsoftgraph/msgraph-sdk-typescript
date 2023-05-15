import {deserializeIntoAppConsentRequestScope} from './deserializeIntoAppConsentRequestScope';
import {AppConsentRequestScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppConsentRequestScope;
}
