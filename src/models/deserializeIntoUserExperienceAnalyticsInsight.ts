import { createUserExperienceAnalyticsInsightValueFromDiscriminatorValue } from './createUserExperienceAnalyticsInsightValueFromDiscriminatorValue';
import { serializeUserExperienceAnalyticsInsightValue } from './serializeUserExperienceAnalyticsInsightValue';
import { type UserExperienceAnalyticsInsight } from './userExperienceAnalyticsInsight';
import { UserExperienceAnalyticsInsightSeverity } from './userExperienceAnalyticsInsightSeverity';
import { type UserExperienceAnalyticsInsightValue } from './userExperienceAnalyticsInsightValue';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsInsight(userExperienceAnalyticsInsight: UserExperienceAnalyticsInsight | undefined = {} as UserExperienceAnalyticsInsight) : Record<string, (node: ParseNode) => void> {
    return {
        "insightId": n => { userExperienceAnalyticsInsight.insightId = n.getStringValue(); },
        "@odata.type": n => { userExperienceAnalyticsInsight.odataType = n.getStringValue(); },
        "severity": n => { userExperienceAnalyticsInsight.severity = n.getEnumValue<UserExperienceAnalyticsInsightSeverity>(UserExperienceAnalyticsInsightSeverity); },
        "userExperienceAnalyticsMetricId": n => { userExperienceAnalyticsInsight.userExperienceAnalyticsMetricId = n.getStringValue(); },
        "values": n => { userExperienceAnalyticsInsight.values = n.getCollectionOfObjectValues<UserExperienceAnalyticsInsightValue>(createUserExperienceAnalyticsInsightValueFromDiscriminatorValue); },
    }
}
