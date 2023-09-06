import { createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue } from './createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeTermsAndConditionsAcceptanceStatus } from './serializeTermsAndConditionsAcceptanceStatus';
import { type TermsAndConditionsAcceptanceStatus } from './termsAndConditionsAcceptanceStatus';
import { type TermsAndConditionsAcceptanceStatusCollectionResponse } from './termsAndConditionsAcceptanceStatusCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsAcceptanceStatusCollectionResponse(termsAndConditionsAcceptanceStatusCollectionResponse: TermsAndConditionsAcceptanceStatusCollectionResponse | undefined = {} as TermsAndConditionsAcceptanceStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termsAndConditionsAcceptanceStatusCollectionResponse),
        "value": n => { termsAndConditionsAcceptanceStatusCollectionResponse.value = n.getCollectionOfObjectValues<TermsAndConditionsAcceptanceStatus>(createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue); },
    }
}
