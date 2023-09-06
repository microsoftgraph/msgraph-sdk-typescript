import { deserializeIntoUserExperienceAnalyticsInsightValue } from './deserializeIntoUserExperienceAnalyticsInsightValue';
import { type InsightValueInt } from './insightValueInt';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoInsightValueInt(insightValueInt: InsightValueInt | undefined = {} as InsightValueInt) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUserExperienceAnalyticsInsightValue(insightValueInt),
        "value": n => { insightValueInt.value = n.getNumberValue(); },
    }
}
