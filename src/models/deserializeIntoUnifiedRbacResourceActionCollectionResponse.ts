import {createUnifiedRbacResourceActionFromDiscriminatorValue} from './createUnifiedRbacResourceActionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRbacResourceAction} from './serializeUnifiedRbacResourceAction';
import {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import {UnifiedRbacResourceActionCollectionResponse} from './unifiedRbacResourceActionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRbacResourceActionCollectionResponse(unifiedRbacResourceActionCollectionResponse: UnifiedRbacResourceActionCollectionResponse | undefined = {} as UnifiedRbacResourceActionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRbacResourceActionCollectionResponse),
        "value": n => { unifiedRbacResourceActionCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRbacResourceAction>(createUnifiedRbacResourceActionFromDiscriminatorValue); },
    }
}
