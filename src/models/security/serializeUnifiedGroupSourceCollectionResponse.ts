import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedGroupSource} from './serializeUnifiedGroupSource';
import {UnifiedGroupSource} from './unifiedGroupSource';
import {UnifiedGroupSourceCollectionResponse} from './unifiedGroupSourceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedGroupSourceCollectionResponse(writer: SerializationWriter, unifiedGroupSourceCollectionResponse: UnifiedGroupSourceCollectionResponse | undefined = {} as UnifiedGroupSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedGroupSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedGroupSource>("value", unifiedGroupSourceCollectionResponse.value, serializeUnifiedGroupSource);
}
