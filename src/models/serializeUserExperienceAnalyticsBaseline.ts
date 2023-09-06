import { serializeEntity } from './serializeEntity';
import { serializeUserExperienceAnalyticsCategory } from './serializeUserExperienceAnalyticsCategory';
import { type UserExperienceAnalyticsBaseline } from './userExperienceAnalyticsBaseline';
import { type UserExperienceAnalyticsCategory } from './userExperienceAnalyticsCategory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsBaseline(writer: SerializationWriter, userExperienceAnalyticsBaseline: UserExperienceAnalyticsBaseline | undefined = {} as UserExperienceAnalyticsBaseline) : void {
        serializeEntity(writer, userExperienceAnalyticsBaseline)
        writer.writeObjectValue<UserExperienceAnalyticsCategory>("appHealthMetrics", userExperienceAnalyticsBaseline.appHealthMetrics, serializeUserExperienceAnalyticsCategory);
        writer.writeObjectValue<UserExperienceAnalyticsCategory>("batteryHealthMetrics", userExperienceAnalyticsBaseline.batteryHealthMetrics, serializeUserExperienceAnalyticsCategory);
        writer.writeObjectValue<UserExperienceAnalyticsCategory>("bestPracticesMetrics", userExperienceAnalyticsBaseline.bestPracticesMetrics, serializeUserExperienceAnalyticsCategory);
        writer.writeDateValue("createdDateTime", userExperienceAnalyticsBaseline.createdDateTime);
        writer.writeObjectValue<UserExperienceAnalyticsCategory>("deviceBootPerformanceMetrics", userExperienceAnalyticsBaseline.deviceBootPerformanceMetrics, serializeUserExperienceAnalyticsCategory);
        writer.writeStringValue("displayName", userExperienceAnalyticsBaseline.displayName);
        writer.writeBooleanValue("isBuiltIn", userExperienceAnalyticsBaseline.isBuiltIn);
        writer.writeObjectValue<UserExperienceAnalyticsCategory>("rebootAnalyticsMetrics", userExperienceAnalyticsBaseline.rebootAnalyticsMetrics, serializeUserExperienceAnalyticsCategory);
        writer.writeObjectValue<UserExperienceAnalyticsCategory>("resourcePerformanceMetrics", userExperienceAnalyticsBaseline.resourcePerformanceMetrics, serializeUserExperienceAnalyticsCategory);
        writer.writeObjectValue<UserExperienceAnalyticsCategory>("workFromAnywhereMetrics", userExperienceAnalyticsBaseline.workFromAnywhereMetrics, serializeUserExperienceAnalyticsCategory);
}
