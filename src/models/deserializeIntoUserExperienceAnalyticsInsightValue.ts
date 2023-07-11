import {UserExperienceAnalyticsInsightValue} from './userExperienceAnalyticsInsightValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsInsightValue(userExperienceAnalyticsInsightValue: UserExperienceAnalyticsInsightValue | undefined = {} as UserExperienceAnalyticsInsightValue) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userExperienceAnalyticsInsightValue.odataType = n.getStringValue(); },
    }
}
