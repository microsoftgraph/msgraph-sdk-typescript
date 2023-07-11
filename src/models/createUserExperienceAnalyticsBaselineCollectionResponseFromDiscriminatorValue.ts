import {deserializeIntoUserExperienceAnalyticsBaselineCollectionResponse} from './deserializeIntoUserExperienceAnalyticsBaselineCollectionResponse';
import {UserExperienceAnalyticsBaselineCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsBaselineCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsBaselineCollectionResponse;
}
