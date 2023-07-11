import {createUserExperienceAnalyticsInsightFromDiscriminatorValue} from './createUserExperienceAnalyticsInsightFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUserExperienceAnalyticsInsight} from './serializeUserExperienceAnalyticsInsight';
import {UserExperienceAnalyticsInsight} from './userExperienceAnalyticsInsight';
import {UserExperienceAnalyticsOverview} from './userExperienceAnalyticsOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsOverview(userExperienceAnalyticsOverview: UserExperienceAnalyticsOverview | undefined = {} as UserExperienceAnalyticsOverview) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsOverview),
        "insights": n => { userExperienceAnalyticsOverview.insights = n.getCollectionOfObjectValues<UserExperienceAnalyticsInsight>(createUserExperienceAnalyticsInsightFromDiscriminatorValue); },
    }
}
