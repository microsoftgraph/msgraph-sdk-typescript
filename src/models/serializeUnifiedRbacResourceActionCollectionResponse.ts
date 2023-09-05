import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUnifiedRbacResourceAction } from './serializeUnifiedRbacResourceAction';
import { type UnifiedRbacResourceAction } from './unifiedRbacResourceAction';
import { type UnifiedRbacResourceActionCollectionResponse } from './unifiedRbacResourceActionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRbacResourceActionCollectionResponse(writer: SerializationWriter, unifiedRbacResourceActionCollectionResponse: UnifiedRbacResourceActionCollectionResponse | undefined = {} as UnifiedRbacResourceActionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRbacResourceActionCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRbacResourceAction>("value", unifiedRbacResourceActionCollectionResponse.value, serializeUnifiedRbacResourceAction);
}
