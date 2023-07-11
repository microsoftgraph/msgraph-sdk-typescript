import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {IntelligenceProfileIndicatorCollectionResponse} from './intelligenceProfileIndicatorCollectionResponse';
import {serializeIntelligenceProfileIndicator} from './serializeIntelligenceProfileIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntelligenceProfileIndicatorCollectionResponse(writer: SerializationWriter, intelligenceProfileIndicatorCollectionResponse: IntelligenceProfileIndicatorCollectionResponse | undefined = {} as IntelligenceProfileIndicatorCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, intelligenceProfileIndicatorCollectionResponse)
        writer.writeCollectionOfObjectValues<IntelligenceProfileIndicator>("value", intelligenceProfileIndicatorCollectionResponse.value, serializeIntelligenceProfileIndicator);
}
