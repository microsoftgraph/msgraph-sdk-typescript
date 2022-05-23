import {ArchiveResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArchiveResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ArchiveResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ArchiveResponseImpl();
}
