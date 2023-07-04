import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse} from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse;
}
