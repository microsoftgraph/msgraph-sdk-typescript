import {deserializeIntoUserExperienceAnalyticsMetricCollectionResponse} from './deserializeIntoUserExperienceAnalyticsMetricCollectionResponse';
import {UserExperienceAnalyticsMetricCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsMetricCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsMetricCollectionResponse;
}
