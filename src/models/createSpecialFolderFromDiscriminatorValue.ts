import {deserializeIntoSpecialFolder} from './deserializeIntoSpecialFolder';
import {SpecialFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSpecialFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSpecialFolder;
}
