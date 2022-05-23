import {AuditLogRootImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditLogRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditLogRootImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditLogRootImpl();
}
