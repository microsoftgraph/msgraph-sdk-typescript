import {createUserExperienceAnalyticsInsightFromDiscriminatorValue} from './createUserExperienceAnalyticsInsightFromDiscriminatorValue';
import {createUserExperienceAnalyticsMetricFromDiscriminatorValue} from './createUserExperienceAnalyticsMetricFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUserExperienceAnalyticsInsight} from './serializeUserExperienceAnalyticsInsight';
import {serializeUserExperienceAnalyticsMetric} from './serializeUserExperienceAnalyticsMetric';
import {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsCategory(userExperienceAnalyticsCategory: UserExperienceAnalyticsCategory | undefined = {} as UserExperienceAnalyticsCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsCategory),
        "insights": n => { userExperienceAnalyticsCategory.insights = n.getCollectionOfObjectValues<UserExperienceAnalyticsInsight>(createUserExperienceAnalyticsInsightFromDiscriminatorValue); },
        "metricValues": n => { userExperienceAnalyticsCategory.metricValues = n.getCollectionOfObjectValues<UserExperienceAnalyticsMetric>(createUserExperienceAnalyticsMetricFromDiscriminatorValue); },
    }
}
