import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceRole(writer: SerializationWriter, accessPackageResourceRole: AccessPackageResourceRole | undefined = {} as AccessPackageResourceRole) : void {
        serializeEntity(writer, accessPackageResourceRole)
        writer.writeStringValue("description", accessPackageResourceRole.description);
        writer.writeStringValue("displayName", accessPackageResourceRole.displayName);
        writer.writeStringValue("originId", accessPackageResourceRole.originId);
        writer.writeStringValue("originSystem", accessPackageResourceRole.originSystem);
        writer.writeObjectValue<AccessPackageResource>("resource", accessPackageResourceRole.resource, serializeAccessPackageResource);
}
