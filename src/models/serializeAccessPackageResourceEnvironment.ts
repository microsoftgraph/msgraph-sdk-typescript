import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceEnvironment(writer: SerializationWriter, accessPackageResourceEnvironment: AccessPackageResourceEnvironment | undefined = {} as AccessPackageResourceEnvironment) : void {
        serializeEntity(writer, accessPackageResourceEnvironment)
        writer.writeDateValue("createdDateTime", accessPackageResourceEnvironment.createdDateTime);
        writer.writeStringValue("description", accessPackageResourceEnvironment.description);
        writer.writeStringValue("displayName", accessPackageResourceEnvironment.displayName);
        writer.writeBooleanValue("isDefaultEnvironment", accessPackageResourceEnvironment.isDefaultEnvironment);
        writer.writeDateValue("modifiedDateTime", accessPackageResourceEnvironment.modifiedDateTime);
        writer.writeStringValue("originId", accessPackageResourceEnvironment.originId);
        writer.writeStringValue("originSystem", accessPackageResourceEnvironment.originSystem);
        writer.writeCollectionOfObjectValues<AccessPackageResource>("resources", accessPackageResourceEnvironment.resources, serializeAccessPackageResource);
}
