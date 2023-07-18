import {AppLogUploadState} from './appLogUploadState';
import {DeviceLogCollectionResponse} from './deviceLogCollectionResponse';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeDeviceLogCollectionResponse(writer: SerializationWriter, deviceLogCollectionResponse: DeviceLogCollectionResponse | undefined = {} as DeviceLogCollectionResponse) : void {
        serializeEntity(writer, deviceLogCollectionResponse)
        writer.writeStringValue("enrolledByUser", deviceLogCollectionResponse.enrolledByUser);
        writer.writeDateValue("expirationDateTimeUTC", deviceLogCollectionResponse.expirationDateTimeUTC);
        writer.writeStringValue("initiatedByUserPrincipalName", deviceLogCollectionResponse.initiatedByUserPrincipalName);
        writer.writeGuidValue("managedDeviceId", deviceLogCollectionResponse.managedDeviceId);
        writer.writeDateValue("receivedDateTimeUTC", deviceLogCollectionResponse.receivedDateTimeUTC);
        writer.writeDateValue("requestedDateTimeUTC", deviceLogCollectionResponse.requestedDateTimeUTC);
        writer.writeNumberValue("sizeInKB", deviceLogCollectionResponse.sizeInKB);
        writer.writeEnumValue<AppLogUploadState>("status", deviceLogCollectionResponse.status);
}
