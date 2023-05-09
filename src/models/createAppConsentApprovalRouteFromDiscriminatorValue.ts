import {deserializeIntoAppConsentApprovalRoute} from './deserializeIntoAppConsentApprovalRoute';
import {AppConsentApprovalRoute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentApprovalRouteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppConsentApprovalRoute;
}
