import {DomainDnsTxtRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsTxtRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsTxtRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsTxtRecord();
}
