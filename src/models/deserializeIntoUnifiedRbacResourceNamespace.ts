import {createUnifiedRbacResourceActionFromDiscriminatorValue} from './createUnifiedRbacResourceActionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUnifiedRbacResourceAction} from './serializeUnifiedRbacResourceAction';
import type {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import type {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRbacResourceNamespace(unifiedRbacResourceNamespace: UnifiedRbacResourceNamespace | undefined = {} as UnifiedRbacResourceNamespace) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRbacResourceNamespace),
        "name": n => { unifiedRbacResourceNamespace.name = n.getStringValue(); },
        "resourceActions": n => { unifiedRbacResourceNamespace.resourceActions = n.getCollectionOfObjectValues<UnifiedRbacResourceAction>(createUnifiedRbacResourceActionFromDiscriminatorValue); },
    }
}
