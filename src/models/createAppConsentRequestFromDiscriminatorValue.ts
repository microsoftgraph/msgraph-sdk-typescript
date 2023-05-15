import {deserializeIntoAppConsentRequest} from './deserializeIntoAppConsentRequest';
import {AppConsentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppConsentRequest;
}
