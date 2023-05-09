import {deserializeIntoDomainDnsUnavailableRecord} from './deserializeIntoDomainDnsUnavailableRecord';
import {DomainDnsUnavailableRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsUnavailableRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsUnavailableRecord;
}
