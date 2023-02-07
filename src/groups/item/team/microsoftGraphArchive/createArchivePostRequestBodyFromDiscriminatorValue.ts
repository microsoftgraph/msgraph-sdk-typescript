import {ArchivePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArchivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ArchivePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ArchivePostRequestBody();
}
