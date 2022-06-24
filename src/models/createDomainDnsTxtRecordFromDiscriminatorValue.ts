import {DomainDnsTxtRecordImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsTxtRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsTxtRecordImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsTxtRecordImpl();
}
