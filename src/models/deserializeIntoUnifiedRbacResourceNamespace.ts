import {createUnifiedRbacResourceActionFromDiscriminatorValue} from './createUnifiedRbacResourceActionFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUnifiedRbacResourceAction} from './serializeUnifiedRbacResourceAction';
import {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRbacResourceNamespace(unifiedRbacResourceNamespace: UnifiedRbacResourceNamespace | undefined = {} as UnifiedRbacResourceNamespace) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRbacResourceNamespace),
        "name": n => { unifiedRbacResourceNamespace.name = n.getStringValue(); },
        "resourceActions": n => { unifiedRbacResourceNamespace.resourceActions = n.getCollectionOfObjectValues<UnifiedRbacResourceAction>(createUnifiedRbacResourceActionFromDiscriminatorValue); },
    }
}
