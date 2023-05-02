import {AccessPackage} from './accessPackage';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessPackage} from './serializeAccessPackage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageCatalog(accessPackageCatalog: AccessPackageCatalog | undefined = {} as AccessPackageCatalog) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageCatalog),
        "accessPackages": n => { accessPackageCatalog.accessPackages = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        "catalogType": n => { accessPackageCatalog.catalogType = n.getEnumValue<AccessPackageCatalogType>(AccessPackageCatalogType); },
        "createdDateTime": n => { accessPackageCatalog.createdDateTime = n.getDateValue(); },
        "description": n => { accessPackageCatalog.description = n.getStringValue(); },
        "displayName": n => { accessPackageCatalog.displayName = n.getStringValue(); },
        "isExternallyVisible": n => { accessPackageCatalog.isExternallyVisible = n.getBooleanValue(); },
        "modifiedDateTime": n => { accessPackageCatalog.modifiedDateTime = n.getDateValue(); },
        "state": n => { accessPackageCatalog.state = n.getEnumValue<AccessPackageCatalogState>(AccessPackageCatalogState); },
    }
}
