import {InternalDomainFederation} from './internalDomainFederation';
import {InternalDomainFederationCollectionResponse} from './internalDomainFederationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeInternalDomainFederation} from './serializeInternalDomainFederation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInternalDomainFederationCollectionResponse(writer: SerializationWriter, internalDomainFederationCollectionResponse: InternalDomainFederationCollectionResponse | undefined = {} as InternalDomainFederationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, internalDomainFederationCollectionResponse)
        writer.writeCollectionOfObjectValues<InternalDomainFederation>("value", internalDomainFederationCollectionResponse.value, serializeInternalDomainFederation);
}
