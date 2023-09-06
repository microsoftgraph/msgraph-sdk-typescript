import { type FileSystemInfo } from './fileSystemInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFileSystemInfo(fileSystemInfo: FileSystemInfo | undefined = {} as FileSystemInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { fileSystemInfo.createdDateTime = n.getDateValue(); },
        "lastAccessedDateTime": n => { fileSystemInfo.lastAccessedDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { fileSystemInfo.lastModifiedDateTime = n.getDateValue(); },
        "@odata.type": n => { fileSystemInfo.odataType = n.getStringValue(); },
    }
}
