import {EducationItemBody} from './educationItemBody';
import {RubricCriterion} from './rubricCriterion';
import {RubricQuality} from './rubricQuality';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeRubricCriterion} from './serializeRubricCriterion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricQuality(writer: SerializationWriter, rubricQuality: RubricQuality | undefined = {} as RubricQuality) : void {
        writer.writeCollectionOfObjectValues<RubricCriterion>("criteria", rubricQuality.criteria, serializeRubricCriterion);
        writer.writeObjectValue<EducationItemBody>("description", rubricQuality.description, serializeEducationItemBody);
        writer.writeStringValue("displayName", rubricQuality.displayName);
        writer.writeStringValue("@odata.type", rubricQuality.odataType);
        writer.writeStringValue("qualityId", rubricQuality.qualityId);
        writer.writeNumberValue("weight", rubricQuality.weight);
        writer.writeAdditionalData(rubricQuality.additionalData);
}
