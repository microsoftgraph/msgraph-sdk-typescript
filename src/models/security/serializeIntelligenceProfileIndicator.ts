import { type IntelligenceProfileIndicator } from './intelligenceProfileIndicator';
import { serializeIndicator } from './serializeIndicator';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIntelligenceProfileIndicator(writer: SerializationWriter, intelligenceProfileIndicator: IntelligenceProfileIndicator | undefined = {} as IntelligenceProfileIndicator) : void {
        serializeIndicator(writer, intelligenceProfileIndicator)
        writer.writeDateValue("firstSeenDateTime", intelligenceProfileIndicator.firstSeenDateTime);
        writer.writeDateValue("lastSeenDateTime", intelligenceProfileIndicator.lastSeenDateTime);
}
