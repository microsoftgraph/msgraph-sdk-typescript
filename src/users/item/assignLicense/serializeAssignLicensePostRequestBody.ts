import {AssignedLicense} from '../../../models/assignedLicense';
import {serializeAssignedLicense} from '../../../models/serializeAssignedLicense';
import {AssignLicensePostRequestBody} from './assignLicensePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignLicensePostRequestBody(assignLicensePostRequestBody: AssignLicensePostRequestBody | undefined = {} as AssignLicensePostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<AssignedLicense>("addLicenses", assignLicensePostRequestBody.addLicenses, serializeAssignedLicense);
        writer.writeCollectionOfPrimitiveValues<string>("removeLicenses", assignLicensePostRequestBody.removeLicenses);
        writer.writeAdditionalData(assignLicensePostRequestBody.additionalData);
}
