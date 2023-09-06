import { deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance } from './deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance';
import { type UserExperienceAnalyticsAppHealthOSVersionPerformance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance;
}
