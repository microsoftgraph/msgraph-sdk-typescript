import {Domain} from './domain';
import {DomainCollectionResponse} from './domainCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomain} from './serializeDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainCollectionResponse(domainCollectionResponse: DomainCollectionResponse | undefined = {} as DomainCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainCollectionResponse)
        writer.writeCollectionOfObjectValues<Domain>("value", domainCollectionResponse.value, serializeDomain);
}
