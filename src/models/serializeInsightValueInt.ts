import { type InsightValueInt } from './insightValueInt';
import { serializeUserExperienceAnalyticsInsightValue } from './serializeUserExperienceAnalyticsInsightValue';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInsightValueInt(writer: SerializationWriter, insightValueInt: InsightValueInt | undefined = {} as InsightValueInt) : void {
        serializeUserExperienceAnalyticsInsightValue(writer, insightValueInt)
        writer.writeNumberValue("value", insightValueInt.value);
}
