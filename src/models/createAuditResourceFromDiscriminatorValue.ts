import {deserializeIntoAuditResource} from './deserializeIntoAuditResource';
import {AuditResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuditResource;
}
