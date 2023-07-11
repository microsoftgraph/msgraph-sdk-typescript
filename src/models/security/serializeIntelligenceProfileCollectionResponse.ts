import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {IntelligenceProfile} from './intelligenceProfile';
import {IntelligenceProfileCollectionResponse} from './intelligenceProfileCollectionResponse';
import {serializeIntelligenceProfile} from './serializeIntelligenceProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntelligenceProfileCollectionResponse(writer: SerializationWriter, intelligenceProfileCollectionResponse: IntelligenceProfileCollectionResponse | undefined = {} as IntelligenceProfileCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, intelligenceProfileCollectionResponse)
        writer.writeCollectionOfObjectValues<IntelligenceProfile>("value", intelligenceProfileCollectionResponse.value, serializeIntelligenceProfile);
}
