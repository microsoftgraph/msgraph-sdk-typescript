import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRbacResourceAction} from './serializeUnifiedRbacResourceAction';
import type {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import type {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRbacResourceNamespace(writer: SerializationWriter, unifiedRbacResourceNamespace: UnifiedRbacResourceNamespace | undefined = {} as UnifiedRbacResourceNamespace) : void {
        serializeEntity(writer, unifiedRbacResourceNamespace)
        writer.writeStringValue("name", unifiedRbacResourceNamespace.name);
        writer.writeCollectionOfObjectValues<UnifiedRbacResourceAction>("resourceActions", unifiedRbacResourceNamespace.resourceActions, serializeUnifiedRbacResourceAction);
}
