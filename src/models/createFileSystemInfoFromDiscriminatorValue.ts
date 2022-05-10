import {FileSystemInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileSystemInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileSystemInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileSystemInfoImpl();
}
