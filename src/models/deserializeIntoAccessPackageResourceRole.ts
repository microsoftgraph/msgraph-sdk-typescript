import { type AccessPackageResource } from './accessPackageResource';
import { type AccessPackageResourceRole } from './accessPackageResourceRole';
import { createAccessPackageResourceFromDiscriminatorValue } from './createAccessPackageResourceFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAccessPackageResource } from './serializeAccessPackageResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRole(accessPackageResourceRole: AccessPackageResourceRole | undefined = {} as AccessPackageResourceRole) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageResourceRole),
        "description": n => { accessPackageResourceRole.description = n.getStringValue(); },
        "displayName": n => { accessPackageResourceRole.displayName = n.getStringValue(); },
        "originId": n => { accessPackageResourceRole.originId = n.getStringValue(); },
        "originSystem": n => { accessPackageResourceRole.originSystem = n.getStringValue(); },
        "resource": n => { accessPackageResourceRole.resource = n.getObjectValue<AccessPackageResource>(createAccessPackageResourceFromDiscriminatorValue); },
    }
}
