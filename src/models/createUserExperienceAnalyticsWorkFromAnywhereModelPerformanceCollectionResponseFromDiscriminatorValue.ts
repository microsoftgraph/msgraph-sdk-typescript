import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse;
}
