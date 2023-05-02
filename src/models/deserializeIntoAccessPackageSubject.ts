import {AccessPackageSubject} from './accessPackageSubject';
import {AccessPackageSubjectType} from './accessPackageSubjectType';
import {ConnectedOrganization} from './connectedOrganization';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeConnectedOrganization} from './serializeConnectedOrganization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageSubject(accessPackageSubject: AccessPackageSubject | undefined = {} as AccessPackageSubject) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageSubject),
        "connectedOrganization": n => { accessPackageSubject.connectedOrganization = n.getObjectValue<ConnectedOrganization>(createConnectedOrganizationFromDiscriminatorValue); },
        "displayName": n => { accessPackageSubject.displayName = n.getStringValue(); },
        "email": n => { accessPackageSubject.email = n.getStringValue(); },
        "objectId": n => { accessPackageSubject.objectId = n.getStringValue(); },
        "onPremisesSecurityIdentifier": n => { accessPackageSubject.onPremisesSecurityIdentifier = n.getStringValue(); },
        "principalName": n => { accessPackageSubject.principalName = n.getStringValue(); },
        "subjectType": n => { accessPackageSubject.subjectType = n.getEnumValue<AccessPackageSubjectType>(AccessPackageSubjectType); },
    }
}
