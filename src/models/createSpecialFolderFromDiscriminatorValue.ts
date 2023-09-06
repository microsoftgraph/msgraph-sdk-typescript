import { deserializeIntoSpecialFolder } from './deserializeIntoSpecialFolder';
import { type SpecialFolder } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSpecialFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSpecialFolder;
}
