import {deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse} from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse';
import {UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse;
}
