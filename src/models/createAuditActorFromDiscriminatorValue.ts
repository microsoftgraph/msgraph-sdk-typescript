import {deserializeIntoAuditActor} from './deserializeIntoAuditActor';
import {AuditActor} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditActorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditActor;
}
