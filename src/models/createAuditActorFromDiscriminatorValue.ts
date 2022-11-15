import {AuditActor} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditActorFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditActor {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditActor();
}
