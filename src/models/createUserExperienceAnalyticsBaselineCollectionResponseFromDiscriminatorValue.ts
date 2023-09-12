import { deserializeIntoUserExperienceAnalyticsBaselineCollectionResponse } from './deserializeIntoUserExperienceAnalyticsBaselineCollectionResponse';
import { type UserExperienceAnalyticsBaselineCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsBaselineCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsBaselineCollectionResponse;
}
