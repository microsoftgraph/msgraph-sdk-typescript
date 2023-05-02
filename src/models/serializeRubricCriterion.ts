import {EducationItemBody} from './educationItemBody';
import {RubricCriterion} from './rubricCriterion';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricCriterion(writer: SerializationWriter, rubricCriterion: RubricCriterion | undefined = {} as RubricCriterion) : void {
        writer.writeObjectValue<EducationItemBody>("description", rubricCriterion.description, serializeEducationItemBody);
        writer.writeStringValue("@odata.type", rubricCriterion.odataType);
        writer.writeAdditionalData(rubricCriterion.additionalData);
}
