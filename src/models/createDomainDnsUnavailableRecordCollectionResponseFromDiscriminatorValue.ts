import {DomainDnsUnavailableRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsUnavailableRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsUnavailableRecordCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsUnavailableRecordCollectionResponse();
}
