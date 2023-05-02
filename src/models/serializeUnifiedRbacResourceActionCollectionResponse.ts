import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRbacResourceAction} from './serializeUnifiedRbacResourceAction';
import {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import {UnifiedRbacResourceActionCollectionResponse} from './unifiedRbacResourceActionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRbacResourceActionCollectionResponse(writer: SerializationWriter, unifiedRbacResourceActionCollectionResponse: UnifiedRbacResourceActionCollectionResponse | undefined = {} as UnifiedRbacResourceActionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRbacResourceActionCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRbacResourceAction>("value", unifiedRbacResourceActionCollectionResponse.value, serializeUnifiedRbacResourceAction);
}
