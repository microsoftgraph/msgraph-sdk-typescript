import {AuditResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditResource();
}
