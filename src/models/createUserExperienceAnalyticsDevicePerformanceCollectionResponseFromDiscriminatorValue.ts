import { deserializeIntoUserExperienceAnalyticsDevicePerformanceCollectionResponse } from './deserializeIntoUserExperienceAnalyticsDevicePerformanceCollectionResponse';
import { type UserExperienceAnalyticsDevicePerformanceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDevicePerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDevicePerformanceCollectionResponse;
}
