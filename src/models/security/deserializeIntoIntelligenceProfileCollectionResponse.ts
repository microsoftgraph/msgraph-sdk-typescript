import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createIntelligenceProfileFromDiscriminatorValue } from './createIntelligenceProfileFromDiscriminatorValue';
import { type IntelligenceProfile } from './intelligenceProfile';
import { type IntelligenceProfileCollectionResponse } from './intelligenceProfileCollectionResponse';
import { serializeIntelligenceProfile } from './serializeIntelligenceProfile';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIntelligenceProfileCollectionResponse(intelligenceProfileCollectionResponse: IntelligenceProfileCollectionResponse | undefined = {} as IntelligenceProfileCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(intelligenceProfileCollectionResponse),
        "value": n => { intelligenceProfileCollectionResponse.value = n.getCollectionOfObjectValues<IntelligenceProfile>(createIntelligenceProfileFromDiscriminatorValue); },
    }
}
