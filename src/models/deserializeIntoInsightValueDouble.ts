import { deserializeIntoUserExperienceAnalyticsInsightValue } from './deserializeIntoUserExperienceAnalyticsInsightValue';
import { type InsightValueDouble } from './insightValueDouble';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoInsightValueDouble(insightValueDouble: InsightValueDouble | undefined = {} as InsightValueDouble) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUserExperienceAnalyticsInsightValue(insightValueDouble),
        "value": n => { insightValueDouble.value = n.getNumberValue(); },
    }
}
