import {createTermsAndConditionsAssignmentFromDiscriminatorValue} from './createTermsAndConditionsAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditionsAssignment} from './serializeTermsAndConditionsAssignment';
import type {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import type {TermsAndConditionsAssignmentCollectionResponse} from './termsAndConditionsAssignmentCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermsAndConditionsAssignmentCollectionResponse(termsAndConditionsAssignmentCollectionResponse: TermsAndConditionsAssignmentCollectionResponse | undefined = {} as TermsAndConditionsAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termsAndConditionsAssignmentCollectionResponse),
        "value": n => { termsAndConditionsAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<TermsAndConditionsAssignment>(createTermsAndConditionsAssignmentFromDiscriminatorValue); },
    }
}
