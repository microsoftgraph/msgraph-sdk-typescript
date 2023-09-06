import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type ExternalConnection } from './externalConnection';
import { type ExternalConnectionCollectionResponse } from './externalConnectionCollectionResponse';
import { serializeExternalConnection } from './serializeExternalConnection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalConnectionCollectionResponse(writer: SerializationWriter, externalConnectionCollectionResponse: ExternalConnectionCollectionResponse | undefined = {} as ExternalConnectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalConnectionCollectionResponse)
        writer.writeCollectionOfObjectValues<ExternalConnection>("value", externalConnectionCollectionResponse.value, serializeExternalConnection);
}
