import { type TimeRange } from './timeRange';
import { TimeOnly, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeRange(timeRange: TimeRange | undefined = {} as TimeRange) : Record<string, (node: ParseNode) => void> {
    return {
        "endTime": n => { timeRange.endTime = n.getTimeOnlyValue(); },
        "@odata.type": n => { timeRange.odataType = n.getStringValue(); },
        "startTime": n => { timeRange.startTime = n.getTimeOnlyValue(); },
    }
}
