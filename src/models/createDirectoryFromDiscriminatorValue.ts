import {deserializeIntoDirectory} from './deserializeIntoDirectory';
import {Directory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectory;
}
