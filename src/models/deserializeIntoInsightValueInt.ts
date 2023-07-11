import {deserializeIntoUserExperienceAnalyticsInsightValue} from './deserializeIntoUserExperienceAnalyticsInsightValue';
import {InsightValueInt} from './insightValueInt';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInsightValueInt(insightValueInt: InsightValueInt | undefined = {} as InsightValueInt) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUserExperienceAnalyticsInsightValue(insightValueInt),
        "value": n => { insightValueInt.value = n.getNumberValue(); },
    }
}
