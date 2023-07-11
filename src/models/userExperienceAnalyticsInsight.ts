import {UserExperienceAnalyticsInsightSeverity} from './userExperienceAnalyticsInsightSeverity';
import {UserExperienceAnalyticsInsightValue} from './userExperienceAnalyticsInsightValue';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsInsight extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The unique identifier of the user experience analytics insight.
     */
    insightId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Indicates severity of insights. Possible values are: None, Informational, Warning, Error.
     */
    severity?: UserExperienceAnalyticsInsightSeverity | undefined;
    /**
     * The unique identifier of the user experience analytics metric.
     */
    userExperienceAnalyticsMetricId?: string | undefined;
    /**
     * The value of the user experience analytics insight.
     */
    values?: UserExperienceAnalyticsInsightValue[] | undefined;
}
