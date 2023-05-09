import {AccessPackage} from './accessPackage';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCatalog(writer: SerializationWriter, accessPackageCatalog: AccessPackageCatalog | undefined = {} as AccessPackageCatalog) : void {
        serializeEntity(writer, accessPackageCatalog)
        writer.writeCollectionOfObjectValues<AccessPackage>("accessPackages", accessPackageCatalog.accessPackages, serializeAccessPackage);
        writer.writeEnumValue<AccessPackageCatalogType>("catalogType", accessPackageCatalog.catalogType);
        writer.writeDateValue("createdDateTime", accessPackageCatalog.createdDateTime);
        writer.writeStringValue("description", accessPackageCatalog.description);
        writer.writeStringValue("displayName", accessPackageCatalog.displayName);
        writer.writeBooleanValue("isExternallyVisible", accessPackageCatalog.isExternallyVisible);
        writer.writeDateValue("modifiedDateTime", accessPackageCatalog.modifiedDateTime);
        writer.writeEnumValue<AccessPackageCatalogState>("state", accessPackageCatalog.state);
}
