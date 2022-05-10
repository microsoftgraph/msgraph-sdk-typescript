import {ArchiveRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArchiveRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ArchiveRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ArchiveRequestBodyImpl();
}
