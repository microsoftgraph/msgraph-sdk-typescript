import {serializeUserExperienceAnalyticsInsightValue} from './serializeUserExperienceAnalyticsInsightValue';
import {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import {UserExperienceAnalyticsInsightSeverity} from './userExperienceAnalyticsInsightSeverity';
import {UserExperienceAnalyticsInsightValue} from './userExperienceAnalyticsInsightValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsInsight(writer: SerializationWriter, userExperienceAnalyticsInsight: UserExperienceAnalyticsInsight | undefined = {} as UserExperienceAnalyticsInsight) : void {
        writer.writeStringValue("insightId", userExperienceAnalyticsInsight.insightId);
        writer.writeStringValue("@odata.type", userExperienceAnalyticsInsight.odataType);
        writer.writeEnumValue<UserExperienceAnalyticsInsightSeverity>("severity", userExperienceAnalyticsInsight.severity);
        writer.writeStringValue("userExperienceAnalyticsMetricId", userExperienceAnalyticsInsight.userExperienceAnalyticsMetricId);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsInsightValue>("values", userExperienceAnalyticsInsight.values, serializeUserExperienceAnalyticsInsightValue);
        writer.writeAdditionalData(userExperienceAnalyticsInsight.additionalData);
}
