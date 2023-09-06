import { deserializeIntoDomainDnsCnameRecord } from './deserializeIntoDomainDnsCnameRecord';
import { type DomainDnsCnameRecord } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDomainDnsCnameRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainDnsCnameRecord;
}
