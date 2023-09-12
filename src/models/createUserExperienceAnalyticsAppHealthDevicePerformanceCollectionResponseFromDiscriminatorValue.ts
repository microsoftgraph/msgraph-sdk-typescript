import { deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse } from './deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse';
import { type UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse;
}
