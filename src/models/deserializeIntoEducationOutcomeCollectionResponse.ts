import {createEducationOutcomeFromDiscriminatorValue} from './createEducationOutcomeFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {EducationOutcome} from './educationOutcome';
import {EducationOutcomeCollectionResponse} from './educationOutcomeCollectionResponse';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOutcomeCollectionResponse(educationOutcomeCollectionResponse: EducationOutcomeCollectionResponse | undefined = {} as EducationOutcomeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationOutcomeCollectionResponse),
        "value": n => { educationOutcomeCollectionResponse.value = n.getCollectionOfObjectValues<EducationOutcome>(createEducationOutcomeFromDiscriminatorValue); },
    }
}
