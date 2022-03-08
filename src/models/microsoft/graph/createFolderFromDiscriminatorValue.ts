import {Folder} from './folder';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Folder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Folder();
}
