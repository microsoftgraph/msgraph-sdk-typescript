import {AppLogUploadState} from './appLogUploadState';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface DeviceLogCollectionResponse extends Entity, Parsable {
    /**
     * The User Principal Name (UPN) of the user that enrolled the device.
     */
    enrolledByUser?: string | undefined;
    /**
     * The DateTime of the expiration of the logs.
     */
    expirationDateTimeUTC?: Date | undefined;
    /**
     * The UPN for who initiated the request.
     */
    initiatedByUserPrincipalName?: string | undefined;
    /**
     * Indicates Intune device unique identifier.
     */
    managedDeviceId?: Guid | undefined;
    /**
     * The DateTime the request was received.
     */
    receivedDateTimeUTC?: Date | undefined;
    /**
     * The DateTime of the request.
     */
    requestedDateTimeUTC?: Date | undefined;
    /**
     * The size of the logs in KB. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     */
    sizeInKB?: number | undefined;
    /**
     * AppLogUploadStatus
     */
    status?: AppLogUploadState | undefined;
}
