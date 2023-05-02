import {deserializeIntoAuditProperty} from './deserializeIntoAuditProperty';
import {AuditProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditProperty;
}
