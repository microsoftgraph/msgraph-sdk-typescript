import {EducationItemBody} from './educationItemBody';
import {RubricCriterion} from './rubricCriterion';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQuality extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The collection of criteria for this rubric quality.
     */
    criteria?: RubricCriterion[] | undefined;
    /**
     * The description of this rubric quality.
     */
    description?: EducationItemBody | undefined;
    /**
     * The name of this rubric quality.
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The ID of this resource.
     */
    qualityId?: string | undefined;
    /**
     * If present, a numerical weight for this quality.  Weights must add up to 100.
     */
    weight?: number | undefined;
}
