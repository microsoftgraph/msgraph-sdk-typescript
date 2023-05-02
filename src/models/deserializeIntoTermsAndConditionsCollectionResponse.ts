import {createTermsAndConditionsFromDiscriminatorValue} from './createTermsAndConditionsFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsCollectionResponse} from './termsAndConditionsCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsCollectionResponse(termsAndConditionsCollectionResponse: TermsAndConditionsCollectionResponse | undefined = {} as TermsAndConditionsCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termsAndConditionsCollectionResponse),
        "value": n => { termsAndConditionsCollectionResponse.value = n.getCollectionOfObjectValues<TermsAndConditions>(createTermsAndConditionsFromDiscriminatorValue); },
    }
}
