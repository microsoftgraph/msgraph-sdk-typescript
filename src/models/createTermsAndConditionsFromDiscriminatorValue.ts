import {TermsAndConditionsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsImpl();
}
