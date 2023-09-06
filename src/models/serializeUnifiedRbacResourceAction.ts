import { serializeEntity } from './serializeEntity';
import { type UnifiedRbacResourceAction } from './unifiedRbacResourceAction';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRbacResourceAction(writer: SerializationWriter, unifiedRbacResourceAction: UnifiedRbacResourceAction | undefined = {} as UnifiedRbacResourceAction) : void {
        serializeEntity(writer, unifiedRbacResourceAction)
        writer.writeStringValue("actionVerb", unifiedRbacResourceAction.actionVerb);
        writer.writeStringValue("authenticationContextId", unifiedRbacResourceAction.authenticationContextId);
        writer.writeStringValue("description", unifiedRbacResourceAction.description);
        writer.writeBooleanValue("isAuthenticationContextSettable", unifiedRbacResourceAction.isAuthenticationContextSettable);
        writer.writeStringValue("name", unifiedRbacResourceAction.name);
        writer.writeStringValue("resourceScopeId", unifiedRbacResourceAction.resourceScopeId);
}
