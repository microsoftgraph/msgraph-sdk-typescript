import {AppLogCollectionRequest} from './appLogCollectionRequest';
import {AppLogUploadState} from './appLogUploadState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppLogCollectionRequest(appLogCollectionRequest: AppLogCollectionRequest | undefined = {} as AppLogCollectionRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appLogCollectionRequest),
        "completedDateTime": n => { appLogCollectionRequest.completedDateTime = n.getDateValue(); },
        "customLogFolders": n => { appLogCollectionRequest.customLogFolders = n.getCollectionOfPrimitiveValues<string>(); },
        "errorMessage": n => { appLogCollectionRequest.errorMessage = n.getStringValue(); },
        "status": n => { appLogCollectionRequest.status = n.getEnumValue<AppLogUploadState>(AppLogUploadState); },
    }
}
