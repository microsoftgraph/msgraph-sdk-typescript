import { type AssignedLicense } from '../../../models/assignedLicense';
import { createAssignedLicenseFromDiscriminatorValue } from '../../../models/createAssignedLicenseFromDiscriminatorValue';
import { serializeAssignedLicense } from '../../../models/serializeAssignedLicense';
import { type AssignLicensePostRequestBody } from './assignLicensePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoAssignLicensePostRequestBody(assignLicensePostRequestBody: AssignLicensePostRequestBody | undefined = {} as AssignLicensePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "addLicenses": n => { assignLicensePostRequestBody.addLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); },
        "removeLicenses": n => { assignLicensePostRequestBody.removeLicenses = n.getCollectionOfPrimitiveValues<Guid>(); },
    }
}
