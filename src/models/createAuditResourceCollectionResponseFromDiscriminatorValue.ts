import {AuditResourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditResourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditResourceCollectionResponse();
}
