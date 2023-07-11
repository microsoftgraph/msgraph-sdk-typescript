import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {createAccessPackageResourceEnvironmentFromDiscriminatorValue} from './createAccessPackageResourceEnvironmentFromDiscriminatorValue';
import {createAccessPackageResourceRoleFromDiscriminatorValue} from './createAccessPackageResourceRoleFromDiscriminatorValue';
import {createAccessPackageResourceScopeFromDiscriminatorValue} from './createAccessPackageResourceScopeFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessPackageResourceEnvironment} from './serializeAccessPackageResourceEnvironment';
import {serializeAccessPackageResourceRole} from './serializeAccessPackageResourceRole';
import {serializeAccessPackageResourceScope} from './serializeAccessPackageResourceScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResource(accessPackageResource: AccessPackageResource | undefined = {} as AccessPackageResource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageResource),
        "createdDateTime": n => { accessPackageResource.createdDateTime = n.getDateValue(); },
        "description": n => { accessPackageResource.description = n.getStringValue(); },
        "displayName": n => { accessPackageResource.displayName = n.getStringValue(); },
        "environment": n => { accessPackageResource.environment = n.getObjectValue<AccessPackageResourceEnvironment>(createAccessPackageResourceEnvironmentFromDiscriminatorValue); },
        "modifiedDateTime": n => { accessPackageResource.modifiedDateTime = n.getDateValue(); },
        "originId": n => { accessPackageResource.originId = n.getStringValue(); },
        "originSystem": n => { accessPackageResource.originSystem = n.getStringValue(); },
        "roles": n => { accessPackageResource.roles = n.getCollectionOfObjectValues<AccessPackageResourceRole>(createAccessPackageResourceRoleFromDiscriminatorValue); },
        "scopes": n => { accessPackageResource.scopes = n.getCollectionOfObjectValues<AccessPackageResourceScope>(createAccessPackageResourceScopeFromDiscriminatorValue); },
    }
}
