import { deserializeIntoFileSystemInfo } from './deserializeIntoFileSystemInfo';
import { type FileSystemInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFileSystemInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileSystemInfo;
}
