import {SpecialFolder} from './specialFolder';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSpecialFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : SpecialFolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SpecialFolder();
}
