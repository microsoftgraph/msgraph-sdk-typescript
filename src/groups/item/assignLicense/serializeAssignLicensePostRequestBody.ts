import type {AssignedLicense} from '../../../models/assignedLicense';
import {serializeAssignedLicense} from '../../../models/serializeAssignedLicense';
import type {AssignLicensePostRequestBody} from './assignLicensePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeAssignLicensePostRequestBody(writer: SerializationWriter, assignLicensePostRequestBody: AssignLicensePostRequestBody | undefined = {} as AssignLicensePostRequestBody) : void {
        writer.writeCollectionOfObjectValues<AssignedLicense>("addLicenses", assignLicensePostRequestBody.addLicenses, serializeAssignedLicense);
        writer.writeCollectionOfPrimitiveValues<Guid>("removeLicenses", assignLicensePostRequestBody.removeLicenses);
        writer.writeAdditionalData(assignLicensePostRequestBody.additionalData);
}
