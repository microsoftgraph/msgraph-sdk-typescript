import {AccessPackage} from './accessPackage';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {CustomCalloutExtension} from './customCalloutExtension';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {serializeAccessPackageResourceRole} from './serializeAccessPackageResourceRole';
import {serializeAccessPackageResourceScope} from './serializeAccessPackageResourceScope';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCatalog(writer: SerializationWriter, accessPackageCatalog: AccessPackageCatalog | undefined = {} as AccessPackageCatalog) : void {
        serializeEntity(writer, accessPackageCatalog)
        writer.writeCollectionOfObjectValues<AccessPackage>("accessPackages", accessPackageCatalog.accessPackages, serializeAccessPackage);
        writer.writeEnumValue<AccessPackageCatalogType>("catalogType", accessPackageCatalog.catalogType);
        writer.writeDateValue("createdDateTime", accessPackageCatalog.createdDateTime);
        writer.writeCollectionOfObjectValues<CustomCalloutExtension>("customWorkflowExtensions", accessPackageCatalog.customWorkflowExtensions, serializeCustomCalloutExtension);
        writer.writeStringValue("description", accessPackageCatalog.description);
        writer.writeStringValue("displayName", accessPackageCatalog.displayName);
        writer.writeBooleanValue("isExternallyVisible", accessPackageCatalog.isExternallyVisible);
        writer.writeDateValue("modifiedDateTime", accessPackageCatalog.modifiedDateTime);
        writer.writeCollectionOfObjectValues<AccessPackageResourceRole>("resourceRoles", accessPackageCatalog.resourceRoles, serializeAccessPackageResourceRole);
        writer.writeCollectionOfObjectValues<AccessPackageResource>("resources", accessPackageCatalog.resources, serializeAccessPackageResource);
        writer.writeCollectionOfObjectValues<AccessPackageResourceScope>("resourceScopes", accessPackageCatalog.resourceScopes, serializeAccessPackageResourceScope);
        writer.writeEnumValue<AccessPackageCatalogState>("state", accessPackageCatalog.state);
}
