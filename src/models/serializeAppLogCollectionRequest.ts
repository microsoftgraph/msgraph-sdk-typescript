import { type AppLogCollectionRequest } from './appLogCollectionRequest';
import { AppLogUploadState } from './appLogUploadState';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAppLogCollectionRequest(writer: SerializationWriter, appLogCollectionRequest: AppLogCollectionRequest | undefined = {} as AppLogCollectionRequest) : void {
        serializeEntity(writer, appLogCollectionRequest)
        writer.writeDateValue("completedDateTime", appLogCollectionRequest.completedDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("customLogFolders", appLogCollectionRequest.customLogFolders);
        writer.writeStringValue("errorMessage", appLogCollectionRequest.errorMessage);
        writer.writeEnumValue<AppLogUploadState>("status", appLogCollectionRequest.status);
}
