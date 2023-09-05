import { deserializeIntoTermsAndConditionsAcceptanceStatusCollectionResponse } from './deserializeIntoTermsAndConditionsAcceptanceStatusCollectionResponse';
import { type TermsAndConditionsAcceptanceStatusCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAcceptanceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditionsAcceptanceStatusCollectionResponse;
}
