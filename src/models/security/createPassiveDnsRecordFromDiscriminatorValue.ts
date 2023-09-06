import { deserializeIntoPassiveDnsRecord } from './deserializeIntoPassiveDnsRecord';
import { type PassiveDnsRecord } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPassiveDnsRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPassiveDnsRecord;
}
