import {AuditPropertyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditPropertyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditPropertyCollectionResponse();
}
