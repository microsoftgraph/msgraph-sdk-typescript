import {serializeEntity} from './serializeEntity';
import {serializeUserExperienceAnalyticsInsight} from './serializeUserExperienceAnalyticsInsight';
import {serializeUserExperienceAnalyticsMetric} from './serializeUserExperienceAnalyticsMetric';
import type {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import type {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import type {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsCategory(writer: SerializationWriter, userExperienceAnalyticsCategory: UserExperienceAnalyticsCategory | undefined = {} as UserExperienceAnalyticsCategory) : void {
        serializeEntity(writer, userExperienceAnalyticsCategory)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsInsight>("insights", userExperienceAnalyticsCategory.insights, serializeUserExperienceAnalyticsInsight);
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsMetric>("metricValues", userExperienceAnalyticsCategory.metricValues, serializeUserExperienceAnalyticsMetric);
}
