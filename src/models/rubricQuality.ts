import {EducationItemBody} from './educationItemBody';
import {RubricCriterion} from './rubricCriterion';

export interface RubricQuality{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The collection of criteria for this rubric quality. */
    criteria?:RubricCriterion[] | undefined;
    /** The description of this rubric quality. */
    description?:EducationItemBody | undefined;
    /** The name of this rubric quality. */
    displayName?:string | undefined;
    /** The ID of this resource. */
    qualityId?:string | undefined;
    /** If present, a numerical weight for this quality.  Weights must add up to 100. */
    weight?:number | undefined;
}
