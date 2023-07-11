import {AccessPackage} from './accessPackage';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createAccessPackageResourceFromDiscriminatorValue} from './createAccessPackageResourceFromDiscriminatorValue';
import {createAccessPackageResourceRoleFromDiscriminatorValue} from './createAccessPackageResourceRoleFromDiscriminatorValue';
import {createAccessPackageResourceScopeFromDiscriminatorValue} from './createAccessPackageResourceScopeFromDiscriminatorValue';
import {createCustomCalloutExtensionFromDiscriminatorValue} from './createCustomCalloutExtensionFromDiscriminatorValue';
import {CustomCalloutExtension} from './customCalloutExtension';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {serializeAccessPackageResourceRole} from './serializeAccessPackageResourceRole';
import {serializeAccessPackageResourceScope} from './serializeAccessPackageResourceScope';
import {serializeCustomCalloutExtension} from './serializeCustomCalloutExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageCatalog(accessPackageCatalog: AccessPackageCatalog | undefined = {} as AccessPackageCatalog) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageCatalog),
        "accessPackages": n => { accessPackageCatalog.accessPackages = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
        "catalogType": n => { accessPackageCatalog.catalogType = n.getEnumValue<AccessPackageCatalogType>(AccessPackageCatalogType); },
        "createdDateTime": n => { accessPackageCatalog.createdDateTime = n.getDateValue(); },
        "customWorkflowExtensions": n => { accessPackageCatalog.customWorkflowExtensions = n.getCollectionOfObjectValues<CustomCalloutExtension>(createCustomCalloutExtensionFromDiscriminatorValue); },
        "description": n => { accessPackageCatalog.description = n.getStringValue(); },
        "displayName": n => { accessPackageCatalog.displayName = n.getStringValue(); },
        "isExternallyVisible": n => { accessPackageCatalog.isExternallyVisible = n.getBooleanValue(); },
        "modifiedDateTime": n => { accessPackageCatalog.modifiedDateTime = n.getDateValue(); },
        "resourceRoles": n => { accessPackageCatalog.resourceRoles = n.getCollectionOfObjectValues<AccessPackageResourceRole>(createAccessPackageResourceRoleFromDiscriminatorValue); },
        "resources": n => { accessPackageCatalog.resources = n.getCollectionOfObjectValues<AccessPackageResource>(createAccessPackageResourceFromDiscriminatorValue); },
        "resourceScopes": n => { accessPackageCatalog.resourceScopes = n.getCollectionOfObjectValues<AccessPackageResourceScope>(createAccessPackageResourceScopeFromDiscriminatorValue); },
        "state": n => { accessPackageCatalog.state = n.getEnumValue<AccessPackageCatalogState>(AccessPackageCatalogState); },
    }
}
