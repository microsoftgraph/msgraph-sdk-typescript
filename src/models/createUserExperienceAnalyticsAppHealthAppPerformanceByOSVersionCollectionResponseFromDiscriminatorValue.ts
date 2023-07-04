import {deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse} from './deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse';
import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse;
}
