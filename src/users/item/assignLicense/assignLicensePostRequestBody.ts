import {AssignedLicense} from '../../../models/assignedLicense';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface AssignLicensePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The addLicenses property
     */
    addLicenses?: AssignedLicense[] | undefined;
    /**
     * The removeLicenses property
     */
    removeLicenses?: Guid[] | undefined;
}
