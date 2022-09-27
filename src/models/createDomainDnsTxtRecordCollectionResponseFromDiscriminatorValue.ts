import {DomainDnsTxtRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsTxtRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsTxtRecordCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsTxtRecordCollectionResponse();
}
