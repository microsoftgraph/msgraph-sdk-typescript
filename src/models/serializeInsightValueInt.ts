import {InsightValueInt} from './insightValueInt';
import {serializeUserExperienceAnalyticsInsightValue} from './serializeUserExperienceAnalyticsInsightValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInsightValueInt(writer: SerializationWriter, insightValueInt: InsightValueInt | undefined = {} as InsightValueInt) : void {
        serializeUserExperienceAnalyticsInsightValue(writer, insightValueInt)
        writer.writeNumberValue("value", insightValueInt.value);
}
