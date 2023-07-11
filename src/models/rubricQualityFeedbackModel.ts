import {EducationItemBody} from './educationItemBody';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQualityFeedbackModel extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Specific feedback for one quality of this rubric.
     */
    feedback?: EducationItemBody | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The ID of the rubricQuality that this feedback is related to.
     */
    qualityId?: string | undefined;
}
