import { type AccessPackageResource } from './accessPackageResource';
import { type AccessPackageResourceScope } from './accessPackageResourceScope';
import { serializeAccessPackageResource } from './serializeAccessPackageResource';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceScope(writer: SerializationWriter, accessPackageResourceScope: AccessPackageResourceScope | undefined = {} as AccessPackageResourceScope) : void {
        serializeEntity(writer, accessPackageResourceScope)
        writer.writeStringValue("description", accessPackageResourceScope.description);
        writer.writeStringValue("displayName", accessPackageResourceScope.displayName);
        writer.writeBooleanValue("isRootScope", accessPackageResourceScope.isRootScope);
        writer.writeStringValue("originId", accessPackageResourceScope.originId);
        writer.writeStringValue("originSystem", accessPackageResourceScope.originSystem);
        writer.writeObjectValue<AccessPackageResource>("resource", accessPackageResourceScope.resource, serializeAccessPackageResource);
}
