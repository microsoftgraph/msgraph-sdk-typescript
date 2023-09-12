import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type UnifiedRbacResourceAction } from './unifiedRbacResourceAction';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRbacResourceAction(unifiedRbacResourceAction: UnifiedRbacResourceAction | undefined = {} as UnifiedRbacResourceAction) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(unifiedRbacResourceAction),
        "actionVerb": n => { unifiedRbacResourceAction.actionVerb = n.getStringValue(); },
        "authenticationContextId": n => { unifiedRbacResourceAction.authenticationContextId = n.getStringValue(); },
        "description": n => { unifiedRbacResourceAction.description = n.getStringValue(); },
        "isAuthenticationContextSettable": n => { unifiedRbacResourceAction.isAuthenticationContextSettable = n.getBooleanValue(); },
        "name": n => { unifiedRbacResourceAction.name = n.getStringValue(); },
        "resourceScopeId": n => { unifiedRbacResourceAction.resourceScopeId = n.getStringValue(); },
    }
}
