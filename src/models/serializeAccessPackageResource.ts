import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {serializeAccessPackageResourceEnvironment} from './serializeAccessPackageResourceEnvironment';
import {serializeAccessPackageResourceRole} from './serializeAccessPackageResourceRole';
import {serializeAccessPackageResourceScope} from './serializeAccessPackageResourceScope';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResource(writer: SerializationWriter, accessPackageResource: AccessPackageResource | undefined = {} as AccessPackageResource) : void {
        serializeEntity(writer, accessPackageResource)
        writer.writeDateValue("createdDateTime", accessPackageResource.createdDateTime);
        writer.writeStringValue("description", accessPackageResource.description);
        writer.writeStringValue("displayName", accessPackageResource.displayName);
        writer.writeObjectValue<AccessPackageResourceEnvironment>("environment", accessPackageResource.environment, serializeAccessPackageResourceEnvironment);
        writer.writeDateValue("modifiedDateTime", accessPackageResource.modifiedDateTime);
        writer.writeStringValue("originId", accessPackageResource.originId);
        writer.writeStringValue("originSystem", accessPackageResource.originSystem);
        writer.writeCollectionOfObjectValues<AccessPackageResourceRole>("roles", accessPackageResource.roles, serializeAccessPackageResourceRole);
        writer.writeCollectionOfObjectValues<AccessPackageResourceScope>("scopes", accessPackageResource.scopes, serializeAccessPackageResourceScope);
}
