import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdCollectionResponse;
}
