import { deserializeIntoFile } from './deserializeIntoFile';
import { type File } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFile;
}
