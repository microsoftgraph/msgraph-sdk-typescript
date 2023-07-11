import {deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse} from './deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse';
import {UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse;
}
