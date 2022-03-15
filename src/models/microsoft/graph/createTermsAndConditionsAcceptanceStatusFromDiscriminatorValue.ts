import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsAcceptanceStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsAcceptanceStatus();
}
