import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createIntelligenceProfileIndicatorFromDiscriminatorValue} from './createIntelligenceProfileIndicatorFromDiscriminatorValue';
import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {IntelligenceProfileIndicatorCollectionResponse} from './intelligenceProfileIndicatorCollectionResponse';
import {serializeIntelligenceProfileIndicator} from './serializeIntelligenceProfileIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntelligenceProfileIndicatorCollectionResponse(intelligenceProfileIndicatorCollectionResponse: IntelligenceProfileIndicatorCollectionResponse | undefined = {} as IntelligenceProfileIndicatorCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(intelligenceProfileIndicatorCollectionResponse),
        "value": n => { intelligenceProfileIndicatorCollectionResponse.value = n.getCollectionOfObjectValues<IntelligenceProfileIndicator>(createIntelligenceProfileIndicatorFromDiscriminatorValue); },
    }
}
