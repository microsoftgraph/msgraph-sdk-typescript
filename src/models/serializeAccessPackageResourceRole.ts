import { type AccessPackageResource } from './accessPackageResource';
import { type AccessPackageResourceRole } from './accessPackageResourceRole';
import { serializeAccessPackageResource } from './serializeAccessPackageResource';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceRole(writer: SerializationWriter, accessPackageResourceRole: AccessPackageResourceRole | undefined = {} as AccessPackageResourceRole) : void {
        serializeEntity(writer, accessPackageResourceRole)
        writer.writeStringValue("description", accessPackageResourceRole.description);
        writer.writeStringValue("displayName", accessPackageResourceRole.displayName);
        writer.writeStringValue("originId", accessPackageResourceRole.originId);
        writer.writeStringValue("originSystem", accessPackageResourceRole.originSystem);
        writer.writeObjectValue<AccessPackageResource>("resource", accessPackageResourceRole.resource, serializeAccessPackageResource);
}
