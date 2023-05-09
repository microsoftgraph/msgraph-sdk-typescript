import {AssignedLicense} from '../../models/assignedLicense';
import {createAssignedLicenseFromDiscriminatorValue} from '../../models/createAssignedLicenseFromDiscriminatorValue';
import {serializeAssignedLicense} from '../../models/serializeAssignedLicense';
import {AssignLicensePostRequestBody} from './assignLicensePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignLicensePostRequestBody(assignLicensePostRequestBody: AssignLicensePostRequestBody | undefined = {} as AssignLicensePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "addLicenses": n => { assignLicensePostRequestBody.addLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); },
        "removeLicenses": n => { assignLicensePostRequestBody.removeLicenses = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
