import {TermsAndConditionsAcceptanceStatusCollectionResponse} from './termsAndConditionsAcceptanceStatusCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAcceptanceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditionsAcceptanceStatusCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditionsAcceptanceStatusCollectionResponse();
}
