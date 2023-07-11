import {deserializeIntoUserExperienceAnalyticsDeviceScoresCollectionResponse} from './deserializeIntoUserExperienceAnalyticsDeviceScoresCollectionResponse';
import {UserExperienceAnalyticsDeviceScoresCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceScoresCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceScoresCollectionResponse;
}
