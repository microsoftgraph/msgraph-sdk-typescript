import { deserializeIntoUserLastSignInRecommendationInsightSetting } from './deserializeIntoUserLastSignInRecommendationInsightSetting';
import { type UserLastSignInRecommendationInsightSetting } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserLastSignInRecommendationInsightSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserLastSignInRecommendationInsightSetting;
}
