import {AuditProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditProperty();
}
