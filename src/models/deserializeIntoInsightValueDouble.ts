import {deserializeIntoUserExperienceAnalyticsInsightValue} from './deserializeIntoUserExperienceAnalyticsInsightValue';
import {InsightValueDouble} from './insightValueDouble';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInsightValueDouble(insightValueDouble: InsightValueDouble | undefined = {} as InsightValueDouble) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoUserExperienceAnalyticsInsightValue(insightValueDouble),
        "value": n => { insightValueDouble.value = n.getNumberValue(); },
    }
}
