import {DomainDnsRecordCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsRecordCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsRecordCollectionResponseImpl();
}
