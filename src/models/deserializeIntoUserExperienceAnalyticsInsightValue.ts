import { type UserExperienceAnalyticsInsightValue } from './userExperienceAnalyticsInsightValue';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsInsightValue(userExperienceAnalyticsInsightValue: UserExperienceAnalyticsInsightValue | undefined = {} as UserExperienceAnalyticsInsightValue) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userExperienceAnalyticsInsightValue.odataType = n.getStringValue(); },
    }
}
