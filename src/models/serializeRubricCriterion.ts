import { type EducationItemBody } from './educationItemBody';
import { type RubricCriterion } from './rubricCriterion';
import { serializeEducationItemBody } from './serializeEducationItemBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRubricCriterion(writer: SerializationWriter, rubricCriterion: RubricCriterion | undefined = {} as RubricCriterion) : void {
        writer.writeObjectValue<EducationItemBody>("description", rubricCriterion.description, serializeEducationItemBody);
        writer.writeStringValue("@odata.type", rubricCriterion.odataType);
        writer.writeAdditionalData(rubricCriterion.additionalData);
}
