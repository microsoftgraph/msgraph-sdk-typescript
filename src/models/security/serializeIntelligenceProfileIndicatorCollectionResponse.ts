import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type IntelligenceProfileIndicator } from './intelligenceProfileIndicator';
import { type IntelligenceProfileIndicatorCollectionResponse } from './intelligenceProfileIndicatorCollectionResponse';
import { serializeIntelligenceProfileIndicator } from './serializeIntelligenceProfileIndicator';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIntelligenceProfileIndicatorCollectionResponse(writer: SerializationWriter, intelligenceProfileIndicatorCollectionResponse: IntelligenceProfileIndicatorCollectionResponse | undefined = {} as IntelligenceProfileIndicatorCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, intelligenceProfileIndicatorCollectionResponse)
        writer.writeCollectionOfObjectValues<IntelligenceProfileIndicator>("value", intelligenceProfileIndicatorCollectionResponse.value, serializeIntelligenceProfileIndicator);
}
