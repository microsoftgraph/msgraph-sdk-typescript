import {ArchivePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArchivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ArchivePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ArchivePostRequestBodyImpl();
}
