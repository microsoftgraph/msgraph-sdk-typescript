import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {createAccessPackageResourceFromDiscriminatorValue} from './createAccessPackageResourceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceScope(accessPackageResourceScope: AccessPackageResourceScope | undefined = {} as AccessPackageResourceScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageResourceScope),
        "description": n => { accessPackageResourceScope.description = n.getStringValue(); },
        "displayName": n => { accessPackageResourceScope.displayName = n.getStringValue(); },
        "isRootScope": n => { accessPackageResourceScope.isRootScope = n.getBooleanValue(); },
        "originId": n => { accessPackageResourceScope.originId = n.getStringValue(); },
        "originSystem": n => { accessPackageResourceScope.originSystem = n.getStringValue(); },
        "resource": n => { accessPackageResourceScope.resource = n.getObjectValue<AccessPackageResource>(createAccessPackageResourceFromDiscriminatorValue); },
    }
}
