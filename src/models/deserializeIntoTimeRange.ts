import {TimeRange} from './timeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeRange(timeRange: TimeRange | undefined = {} as TimeRange) : Record<string, (node: ParseNode) => void> {
    return {
        "endTime": n => { timeRange.endTime = n.getTimeOnlyValue(); },
        "@odata.type": n => { timeRange.odataType = n.getStringValue(); },
        "startTime": n => { timeRange.startTime = n.getTimeOnlyValue(); },
    }
}
