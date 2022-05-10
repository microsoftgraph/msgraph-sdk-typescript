import {TermsAndConditionsAcceptanceStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsAcceptanceStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsAcceptanceStatusImpl();
}
