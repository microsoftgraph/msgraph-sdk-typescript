import {createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue} from './createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditionsAcceptanceStatus} from './serializeTermsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatusCollectionResponse} from './termsAndConditionsAcceptanceStatusCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsAcceptanceStatusCollectionResponse(termsAndConditionsAcceptanceStatusCollectionResponse: TermsAndConditionsAcceptanceStatusCollectionResponse | undefined = {} as TermsAndConditionsAcceptanceStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termsAndConditionsAcceptanceStatusCollectionResponse),
        "value": n => { termsAndConditionsAcceptanceStatusCollectionResponse.value = n.getCollectionOfObjectValues<TermsAndConditionsAcceptanceStatus>(createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue); },
    }
}
