import { type Domain } from './domain';
import { type DomainCollectionResponse } from './domainCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDomain } from './serializeDomain';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDomainCollectionResponse(writer: SerializationWriter, domainCollectionResponse: DomainCollectionResponse | undefined = {} as DomainCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainCollectionResponse)
        writer.writeCollectionOfObjectValues<Domain>("value", domainCollectionResponse.value, serializeDomain);
}
