import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {serializeIndicator} from './serializeIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntelligenceProfileIndicator(writer: SerializationWriter, intelligenceProfileIndicator: IntelligenceProfileIndicator | undefined = {} as IntelligenceProfileIndicator) : void {
        serializeIndicator(writer, intelligenceProfileIndicator)
        writer.writeDateValue("firstSeenDateTime", intelligenceProfileIndicator.firstSeenDateTime);
        writer.writeDateValue("lastSeenDateTime", intelligenceProfileIndicator.lastSeenDateTime);
}
