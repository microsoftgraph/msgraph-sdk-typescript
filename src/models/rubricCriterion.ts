import {EducationItemBody} from './educationItemBody';

export interface RubricCriterion{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The description of this criterion. */
    description?:EducationItemBody | undefined;
}
