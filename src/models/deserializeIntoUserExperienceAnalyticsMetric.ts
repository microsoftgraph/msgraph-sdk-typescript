import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type UserExperienceAnalyticsMetric } from './userExperienceAnalyticsMetric';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsMetric(userExperienceAnalyticsMetric: UserExperienceAnalyticsMetric | undefined = {} as UserExperienceAnalyticsMetric) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsMetric),
        "unit": n => { userExperienceAnalyticsMetric.unit = n.getStringValue(); },
        "value": n => { userExperienceAnalyticsMetric.value = n.getNumberValue(); },
    }
}
