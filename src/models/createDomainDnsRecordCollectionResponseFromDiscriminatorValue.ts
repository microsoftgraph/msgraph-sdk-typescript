import { deserializeIntoDomainDnsRecordCollectionResponse } from './deserializeIntoDomainDnsRecordCollectionResponse';
import { type DomainDnsRecordCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsRecordCollectionResponse;
}
