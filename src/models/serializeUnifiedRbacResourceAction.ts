import {serializeEntity} from './serializeEntity';
import {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRbacResourceAction(writer: SerializationWriter, unifiedRbacResourceAction: UnifiedRbacResourceAction | undefined = {} as UnifiedRbacResourceAction) : void {
        serializeEntity(writer, unifiedRbacResourceAction)
        writer.writeStringValue("actionVerb", unifiedRbacResourceAction.actionVerb);
        writer.writeStringValue("authenticationContextId", unifiedRbacResourceAction.authenticationContextId);
        writer.writeStringValue("description", unifiedRbacResourceAction.description);
        writer.writeBooleanValue("isAuthenticationContextSettable", unifiedRbacResourceAction.isAuthenticationContextSettable);
        writer.writeStringValue("name", unifiedRbacResourceAction.name);
        writer.writeStringValue("resourceScopeId", unifiedRbacResourceAction.resourceScopeId);
}
