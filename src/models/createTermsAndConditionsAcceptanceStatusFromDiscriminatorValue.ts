import {deserializeIntoTermsAndConditionsAcceptanceStatus} from './deserializeIntoTermsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditionsAcceptanceStatus;
}
