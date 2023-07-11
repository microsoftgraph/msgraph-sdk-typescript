import {UserExperienceAnalyticsInsightValue} from './userExperienceAnalyticsInsightValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsInsightValue(writer: SerializationWriter, userExperienceAnalyticsInsightValue: UserExperienceAnalyticsInsightValue | undefined = {} as UserExperienceAnalyticsInsightValue) : void {
        writer.writeStringValue("@odata.type", userExperienceAnalyticsInsightValue.odataType);
        writer.writeAdditionalData(userExperienceAnalyticsInsightValue.additionalData);
}
