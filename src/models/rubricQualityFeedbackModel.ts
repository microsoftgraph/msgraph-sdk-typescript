import {EducationItemBody} from './educationItemBody';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQualityFeedbackModel extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Specific feedback for one quality of this rubric. */
    feedback?: EducationItemBody | undefined;
    /** The ID of the rubricQuality that this feedback is related to. */
    qualityId?: string | undefined;
}
