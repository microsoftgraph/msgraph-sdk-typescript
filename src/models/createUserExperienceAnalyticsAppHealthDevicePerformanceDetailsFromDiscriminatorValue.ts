import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails} from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails;
}
