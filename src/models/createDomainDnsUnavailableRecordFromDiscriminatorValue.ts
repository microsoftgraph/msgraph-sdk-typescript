import {DomainDnsUnavailableRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsUnavailableRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsUnavailableRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsUnavailableRecord();
}
