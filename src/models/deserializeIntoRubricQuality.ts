import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createRubricCriterionFromDiscriminatorValue} from './createRubricCriterionFromDiscriminatorValue';
import {EducationItemBody} from './educationItemBody';
import {RubricCriterion} from './rubricCriterion';
import {RubricQuality} from './rubricQuality';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeRubricCriterion} from './serializeRubricCriterion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQuality(rubricQuality: RubricQuality | undefined = {} as RubricQuality) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { rubricQuality.criteria = n.getCollectionOfObjectValues<RubricCriterion>(createRubricCriterionFromDiscriminatorValue); },
        "description": n => { rubricQuality.description = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
        "displayName": n => { rubricQuality.displayName = n.getStringValue(); },
        "@odata.type": n => { rubricQuality.odataType = n.getStringValue(); },
        "qualityId": n => { rubricQuality.qualityId = n.getStringValue(); },
        "weight": n => { rubricQuality.weight = n.getNumberValue(); },
    }
}
