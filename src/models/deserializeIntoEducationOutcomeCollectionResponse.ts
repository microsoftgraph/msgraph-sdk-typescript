import {createEducationOutcomeFromDiscriminatorValue} from './createEducationOutcomeFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {EducationOutcome} from './educationOutcome';
import type {EducationOutcomeCollectionResponse} from './educationOutcomeCollectionResponse';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOutcomeCollectionResponse(educationOutcomeCollectionResponse: EducationOutcomeCollectionResponse | undefined = {} as EducationOutcomeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationOutcomeCollectionResponse),
        "value": n => { educationOutcomeCollectionResponse.value = n.getCollectionOfObjectValues<EducationOutcome>(createEducationOutcomeFromDiscriminatorValue); },
    }
}
