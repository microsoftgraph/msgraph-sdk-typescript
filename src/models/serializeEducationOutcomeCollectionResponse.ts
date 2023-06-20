import {EducationOutcome} from './educationOutcome';
import {EducationOutcomeCollectionResponse} from './educationOutcomeCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationOutcome} from './serializeEducationOutcome';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationOutcomeCollectionResponse(educationOutcomeCollectionResponse: EducationOutcomeCollectionResponse | undefined = {} as EducationOutcomeCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationOutcomeCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationOutcome>("value", educationOutcomeCollectionResponse.value, serializeEducationOutcome);
}
