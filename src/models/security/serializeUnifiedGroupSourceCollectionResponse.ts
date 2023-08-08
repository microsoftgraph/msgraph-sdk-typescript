import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedGroupSource} from './serializeUnifiedGroupSource';
import type {UnifiedGroupSource} from './unifiedGroupSource';
import type {UnifiedGroupSourceCollectionResponse} from './unifiedGroupSourceCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedGroupSourceCollectionResponse(writer: SerializationWriter, unifiedGroupSourceCollectionResponse: UnifiedGroupSourceCollectionResponse | undefined = {} as UnifiedGroupSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedGroupSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedGroupSource>("value", unifiedGroupSourceCollectionResponse.value, serializeUnifiedGroupSource);
}
