import {SpecialFolderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSpecialFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : SpecialFolderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SpecialFolderImpl();
}
