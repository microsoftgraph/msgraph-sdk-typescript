import {deserializeIntoUserLastSignInRecommendationInsightSetting} from './deserializeIntoUserLastSignInRecommendationInsightSetting';
import {UserLastSignInRecommendationInsightSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserLastSignInRecommendationInsightSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserLastSignInRecommendationInsightSetting;
}
