import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse';
import {UserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetricCollectionResponse;
}
