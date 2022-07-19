import {DomainDnsCnameRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsCnameRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsCnameRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsCnameRecord();
}
