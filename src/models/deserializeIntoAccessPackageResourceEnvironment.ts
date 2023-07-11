import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import {createAccessPackageResourceFromDiscriminatorValue} from './createAccessPackageResourceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceEnvironment(accessPackageResourceEnvironment: AccessPackageResourceEnvironment | undefined = {} as AccessPackageResourceEnvironment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageResourceEnvironment),
        "createdDateTime": n => { accessPackageResourceEnvironment.createdDateTime = n.getDateValue(); },
        "description": n => { accessPackageResourceEnvironment.description = n.getStringValue(); },
        "displayName": n => { accessPackageResourceEnvironment.displayName = n.getStringValue(); },
        "isDefaultEnvironment": n => { accessPackageResourceEnvironment.isDefaultEnvironment = n.getBooleanValue(); },
        "modifiedDateTime": n => { accessPackageResourceEnvironment.modifiedDateTime = n.getDateValue(); },
        "originId": n => { accessPackageResourceEnvironment.originId = n.getStringValue(); },
        "originSystem": n => { accessPackageResourceEnvironment.originSystem = n.getStringValue(); },
        "resources": n => { accessPackageResourceEnvironment.resources = n.getCollectionOfObjectValues<AccessPackageResource>(createAccessPackageResourceFromDiscriminatorValue); },
    }
}
