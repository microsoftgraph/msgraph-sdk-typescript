import {serializeEntity} from './serializeEntity';
import {serializeUnifiedRbacResourceAction} from './serializeUnifiedRbacResourceAction';
import {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import {UnifiedRbacResourceNamespace} from './unifiedRbacResourceNamespace';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRbacResourceNamespace(writer: SerializationWriter, unifiedRbacResourceNamespace: UnifiedRbacResourceNamespace | undefined = {} as UnifiedRbacResourceNamespace) : void {
        serializeEntity(writer, unifiedRbacResourceNamespace)
        writer.writeStringValue("name", unifiedRbacResourceNamespace.name);
        writer.writeCollectionOfObjectValues<UnifiedRbacResourceAction>("resourceActions", unifiedRbacResourceNamespace.resourceActions, serializeUnifiedRbacResourceAction);
}
