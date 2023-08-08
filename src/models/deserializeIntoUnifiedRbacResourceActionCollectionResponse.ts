import {createUnifiedRbacResourceActionFromDiscriminatorValue} from './createUnifiedRbacResourceActionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUnifiedRbacResourceAction} from './serializeUnifiedRbacResourceAction';
import type {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import type {UnifiedRbacResourceActionCollectionResponse} from './unifiedRbacResourceActionCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRbacResourceActionCollectionResponse(unifiedRbacResourceActionCollectionResponse: UnifiedRbacResourceActionCollectionResponse | undefined = {} as UnifiedRbacResourceActionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(unifiedRbacResourceActionCollectionResponse),
        "value": n => { unifiedRbacResourceActionCollectionResponse.value = n.getCollectionOfObjectValues<UnifiedRbacResourceAction>(createUnifiedRbacResourceActionFromDiscriminatorValue); },
    }
}
