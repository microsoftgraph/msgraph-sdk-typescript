import {TimeRange} from './timeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeTimeRange(writer: SerializationWriter, timeRange: TimeRange | undefined = {} as TimeRange) : void {
        writer.writeTimeOnlyValue("endTime", timeRange.endTime);
        writer.writeStringValue("@odata.type", timeRange.odataType);
        writer.writeTimeOnlyValue("startTime", timeRange.startTime);
        writer.writeAdditionalData(timeRange.additionalData);
}
