import {AuditActivityInitiatorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditActivityInitiatorFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditActivityInitiatorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditActivityInitiatorImpl();
}
