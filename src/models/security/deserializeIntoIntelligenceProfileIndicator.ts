import { deserializeIntoIndicator } from './deserializeIntoIndicator';
import { type IntelligenceProfileIndicator } from './intelligenceProfileIndicator';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIntelligenceProfileIndicator(intelligenceProfileIndicator: IntelligenceProfileIndicator | undefined = {} as IntelligenceProfileIndicator) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIndicator(intelligenceProfileIndicator),
        "firstSeenDateTime": n => { intelligenceProfileIndicator.firstSeenDateTime = n.getDateValue(); },
        "lastSeenDateTime": n => { intelligenceProfileIndicator.lastSeenDateTime = n.getDateValue(); },
    }
}
