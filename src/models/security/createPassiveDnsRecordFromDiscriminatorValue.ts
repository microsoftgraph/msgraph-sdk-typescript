import {deserializeIntoPassiveDnsRecord} from './deserializeIntoPassiveDnsRecord';
import {PassiveDnsRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPassiveDnsRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPassiveDnsRecord;
}
