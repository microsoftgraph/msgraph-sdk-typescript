import { deserializeIntoDomainDnsUnavailableRecord } from './deserializeIntoDomainDnsUnavailableRecord';
import { type DomainDnsUnavailableRecord } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDomainDnsUnavailableRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsUnavailableRecord;
}
