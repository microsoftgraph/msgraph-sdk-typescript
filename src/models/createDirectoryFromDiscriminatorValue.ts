import {DirectoryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryImpl();
}
