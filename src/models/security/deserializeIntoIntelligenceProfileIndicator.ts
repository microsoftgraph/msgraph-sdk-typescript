import {deserializeIntoIndicator} from './deserializeIntoIndicator';
import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntelligenceProfileIndicator(intelligenceProfileIndicator: IntelligenceProfileIndicator | undefined = {} as IntelligenceProfileIndicator) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIndicator(intelligenceProfileIndicator),
        "firstSeenDateTime": n => { intelligenceProfileIndicator.firstSeenDateTime = n.getDateValue(); },
        "lastSeenDateTime": n => { intelligenceProfileIndicator.lastSeenDateTime = n.getDateValue(); },
    }
}
