import { AppLogUploadState } from './appLogUploadState';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceLogCollectionResponse } from './deviceLogCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoDeviceLogCollectionResponse(deviceLogCollectionResponse: DeviceLogCollectionResponse | undefined = {} as DeviceLogCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceLogCollectionResponse),
        "enrolledByUser": n => { deviceLogCollectionResponse.enrolledByUser = n.getStringValue(); },
        "expirationDateTimeUTC": n => { deviceLogCollectionResponse.expirationDateTimeUTC = n.getDateValue(); },
        "initiatedByUserPrincipalName": n => { deviceLogCollectionResponse.initiatedByUserPrincipalName = n.getStringValue(); },
        "managedDeviceId": n => { deviceLogCollectionResponse.managedDeviceId = n.getGuidValue(); },
        "receivedDateTimeUTC": n => { deviceLogCollectionResponse.receivedDateTimeUTC = n.getDateValue(); },
        "requestedDateTimeUTC": n => { deviceLogCollectionResponse.requestedDateTimeUTC = n.getDateValue(); },
        "sizeInKB": n => { deviceLogCollectionResponse.sizeInKB = n.getNumberValue(); },
        "status": n => { deviceLogCollectionResponse.status = n.getEnumValue<AppLogUploadState>(AppLogUploadState); },
    }
}
