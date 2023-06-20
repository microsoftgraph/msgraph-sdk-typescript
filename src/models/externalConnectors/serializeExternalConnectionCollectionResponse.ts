import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ExternalConnection} from './externalConnection';
import {ExternalConnectionCollectionResponse} from './externalConnectionCollectionResponse';
import {serializeExternalConnection} from './serializeExternalConnection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalConnectionCollectionResponse(externalConnectionCollectionResponse: ExternalConnectionCollectionResponse | undefined = {} as ExternalConnectionCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalConnectionCollectionResponse)
        writer.writeCollectionOfObjectValues<ExternalConnection>("value", externalConnectionCollectionResponse.value, serializeExternalConnection);
}
