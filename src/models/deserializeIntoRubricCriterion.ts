import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationItemBody} from './educationItemBody';
import {RubricCriterion} from './rubricCriterion';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricCriterion(rubricCriterion: RubricCriterion | undefined = {} as RubricCriterion) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { rubricCriterion.description = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
        "@odata.type": n => { rubricCriterion.odataType = n.getStringValue(); },
    }
}
