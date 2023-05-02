import {deserializeIntoFileHash} from './deserializeIntoFileHash';
import {FileHash} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileHashFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileHash;
}
