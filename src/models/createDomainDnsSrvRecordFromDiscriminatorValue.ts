import { deserializeIntoDomainDnsSrvRecord } from './deserializeIntoDomainDnsSrvRecord';
import { type DomainDnsSrvRecord } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDomainDnsSrvRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsSrvRecord;
}
