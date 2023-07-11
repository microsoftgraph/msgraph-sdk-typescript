import {createUserExperienceAnalyticsCategoryFromDiscriminatorValue} from './createUserExperienceAnalyticsCategoryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUserExperienceAnalyticsCategory} from './serializeUserExperienceAnalyticsCategory';
import {UserExperienceAnalyticsBaseline} from './userExperienceAnalyticsBaseline';
import {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsBaseline(userExperienceAnalyticsBaseline: UserExperienceAnalyticsBaseline | undefined = {} as UserExperienceAnalyticsBaseline) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsBaseline),
        "appHealthMetrics": n => { userExperienceAnalyticsBaseline.appHealthMetrics = n.getObjectValue<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
        "batteryHealthMetrics": n => { userExperienceAnalyticsBaseline.batteryHealthMetrics = n.getObjectValue<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
        "bestPracticesMetrics": n => { userExperienceAnalyticsBaseline.bestPracticesMetrics = n.getObjectValue<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
        "createdDateTime": n => { userExperienceAnalyticsBaseline.createdDateTime = n.getDateValue(); },
        "deviceBootPerformanceMetrics": n => { userExperienceAnalyticsBaseline.deviceBootPerformanceMetrics = n.getObjectValue<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
        "displayName": n => { userExperienceAnalyticsBaseline.displayName = n.getStringValue(); },
        "isBuiltIn": n => { userExperienceAnalyticsBaseline.isBuiltIn = n.getBooleanValue(); },
        "rebootAnalyticsMetrics": n => { userExperienceAnalyticsBaseline.rebootAnalyticsMetrics = n.getObjectValue<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
        "resourcePerformanceMetrics": n => { userExperienceAnalyticsBaseline.resourcePerformanceMetrics = n.getObjectValue<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
        "workFromAnywhereMetrics": n => { userExperienceAnalyticsBaseline.workFromAnywhereMetrics = n.getObjectValue<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
    }
}
