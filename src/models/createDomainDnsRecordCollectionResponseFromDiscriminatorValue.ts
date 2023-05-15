import {deserializeIntoDomainDnsRecordCollectionResponse} from './deserializeIntoDomainDnsRecordCollectionResponse';
import {DomainDnsRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsRecordCollectionResponse;
}
