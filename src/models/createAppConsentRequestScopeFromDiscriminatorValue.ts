import { deserializeIntoAppConsentRequestScope } from './deserializeIntoAppConsentRequestScope';
import { type AppConsentRequestScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppConsentRequestScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppConsentRequestScope;
}
