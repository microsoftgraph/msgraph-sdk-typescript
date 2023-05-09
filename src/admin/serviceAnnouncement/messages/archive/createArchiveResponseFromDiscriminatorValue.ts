import {deserializeIntoArchiveResponse} from './deserializeIntoArchiveResponse';
import {ArchiveResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArchiveResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArchiveResponse;
}
