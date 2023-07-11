import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createIntelligenceProfileFromDiscriminatorValue} from './createIntelligenceProfileFromDiscriminatorValue';
import {IntelligenceProfile} from './intelligenceProfile';
import {IntelligenceProfileCollectionResponse} from './intelligenceProfileCollectionResponse';
import {serializeIntelligenceProfile} from './serializeIntelligenceProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntelligenceProfileCollectionResponse(intelligenceProfileCollectionResponse: IntelligenceProfileCollectionResponse | undefined = {} as IntelligenceProfileCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(intelligenceProfileCollectionResponse),
        "value": n => { intelligenceProfileCollectionResponse.value = n.getCollectionOfObjectValues<IntelligenceProfile>(createIntelligenceProfileFromDiscriminatorValue); },
    }
}
