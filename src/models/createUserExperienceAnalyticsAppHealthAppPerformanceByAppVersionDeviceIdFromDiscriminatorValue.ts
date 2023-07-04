import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId;
}
