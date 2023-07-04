import {InsightValueDouble} from './insightValueDouble';
import {serializeUserExperienceAnalyticsInsightValue} from './serializeUserExperienceAnalyticsInsightValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInsightValueDouble(writer: SerializationWriter, insightValueDouble: InsightValueDouble | undefined = {} as InsightValueDouble) : void {
        serializeUserExperienceAnalyticsInsightValue(writer, insightValueDouble)
        writer.writeNumberValue("value", insightValueDouble.value);
}
