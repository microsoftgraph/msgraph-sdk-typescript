import {DomainDnsCnameRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsCnameRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsCnameRecordCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsCnameRecordCollectionResponse();
}
