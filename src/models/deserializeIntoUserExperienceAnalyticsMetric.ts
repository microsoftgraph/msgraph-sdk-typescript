import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsMetric} from './userExperienceAnalyticsMetric';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsMetric(userExperienceAnalyticsMetric: UserExperienceAnalyticsMetric | undefined = {} as UserExperienceAnalyticsMetric) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsMetric),
        "unit": n => { userExperienceAnalyticsMetric.unit = n.getStringValue(); },
        "value": n => { userExperienceAnalyticsMetric.value = n.getNumberValue(); },
    }
}
