import { type EducationOutcome } from './educationOutcome';
import { type EducationOutcomeCollectionResponse } from './educationOutcomeCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeEducationOutcome } from './serializeEducationOutcome';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationOutcomeCollectionResponse(writer: SerializationWriter, educationOutcomeCollectionResponse: EducationOutcomeCollectionResponse | undefined = {} as EducationOutcomeCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationOutcomeCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationOutcome>("value", educationOutcomeCollectionResponse.value, serializeEducationOutcome);
}
