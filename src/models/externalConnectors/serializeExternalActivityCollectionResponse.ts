import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ExternalActivity} from './externalActivity';
import {ExternalActivityCollectionResponse} from './externalActivityCollectionResponse';
import {serializeExternalActivity} from './serializeExternalActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalActivityCollectionResponse(externalActivityCollectionResponse: ExternalActivityCollectionResponse | undefined = {} as ExternalActivityCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalActivityCollectionResponse)
        writer.writeCollectionOfObjectValues<ExternalActivity>("value", externalActivityCollectionResponse.value, serializeExternalActivity);
}
