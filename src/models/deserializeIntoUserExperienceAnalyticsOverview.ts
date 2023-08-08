import {createUserExperienceAnalyticsInsightFromDiscriminatorValue} from './createUserExperienceAnalyticsInsightFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUserExperienceAnalyticsInsight} from './serializeUserExperienceAnalyticsInsight';
import type {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import type {UserExperienceAnalyticsOverview} from './userExperienceAnalyticsOverview';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsOverview(userExperienceAnalyticsOverview: UserExperienceAnalyticsOverview | undefined = {} as UserExperienceAnalyticsOverview) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsOverview),
        "insights": n => { userExperienceAnalyticsOverview.insights = n.getCollectionOfObjectValues<UserExperienceAnalyticsInsight>(createUserExperienceAnalyticsInsightFromDiscriminatorValue); },
    }
}
