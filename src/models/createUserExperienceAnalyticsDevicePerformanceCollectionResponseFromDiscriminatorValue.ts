import {deserializeIntoUserExperienceAnalyticsDevicePerformanceCollectionResponse} from './deserializeIntoUserExperienceAnalyticsDevicePerformanceCollectionResponse';
import {UserExperienceAnalyticsDevicePerformanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDevicePerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDevicePerformanceCollectionResponse;
}
