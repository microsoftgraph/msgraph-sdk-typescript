import {TermsAndConditionsAcceptanceStatusCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAcceptanceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsAcceptanceStatusCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsAcceptanceStatusCollectionResponseImpl();
}
