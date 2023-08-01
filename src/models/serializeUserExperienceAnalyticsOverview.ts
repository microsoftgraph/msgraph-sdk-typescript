import {serializeEntity} from './serializeEntity';
import {serializeUserExperienceAnalyticsInsight} from './serializeUserExperienceAnalyticsInsight';
import type {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import type {UserExperienceAnalyticsOverview} from './userExperienceAnalyticsOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsOverview(writer: SerializationWriter, userExperienceAnalyticsOverview: UserExperienceAnalyticsOverview | undefined = {} as UserExperienceAnalyticsOverview) : void {
        serializeEntity(writer, userExperienceAnalyticsOverview)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsInsight>("insights", userExperienceAnalyticsOverview.insights, serializeUserExperienceAnalyticsInsight);
}
