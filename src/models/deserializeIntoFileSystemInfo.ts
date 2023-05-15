import {FileSystemInfo} from './fileSystemInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFileSystemInfo(fileSystemInfo: FileSystemInfo | undefined = {} as FileSystemInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { fileSystemInfo.createdDateTime = n.getDateValue(); },
        "lastAccessedDateTime": n => { fileSystemInfo.lastAccessedDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { fileSystemInfo.lastModifiedDateTime = n.getDateValue(); },
        "@odata.type": n => { fileSystemInfo.odataType = n.getStringValue(); },
    }
}
