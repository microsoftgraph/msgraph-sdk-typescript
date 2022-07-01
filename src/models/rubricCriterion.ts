import {EducationItemBody} from './educationItemBody';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricCriterion extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The description of this criterion. */
    description?: EducationItemBody | undefined;
}
