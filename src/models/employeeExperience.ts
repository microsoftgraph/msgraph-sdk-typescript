import type {LearningCourseActivity} from './learningCourseActivity';
import type {LearningProvider} from './learningProvider';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EmployeeExperience extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The learningCourseActivities property
     */
    learningCourseActivities?: LearningCourseActivity[] | undefined;
    /**
     * A collection of learning providers.
     */
    learningProviders?: LearningProvider[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
