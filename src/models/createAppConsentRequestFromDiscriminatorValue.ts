import { deserializeIntoAppConsentRequest } from './deserializeIntoAppConsentRequest';
import { type AppConsentRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppConsentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppConsentRequest;
}
