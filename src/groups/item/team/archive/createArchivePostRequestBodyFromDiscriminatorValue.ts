import {deserializeIntoArchivePostRequestBody} from './deserializeIntoArchivePostRequestBody';
import {ArchivePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArchivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArchivePostRequestBody;
}
