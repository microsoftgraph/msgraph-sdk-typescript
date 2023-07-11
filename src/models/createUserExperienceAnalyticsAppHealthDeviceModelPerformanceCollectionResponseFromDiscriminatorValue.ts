import {deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse} from './deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse;
}
