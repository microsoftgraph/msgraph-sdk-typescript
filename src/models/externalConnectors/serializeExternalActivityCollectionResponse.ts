import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {ExternalActivity} from './externalActivity';
import type {ExternalActivityCollectionResponse} from './externalActivityCollectionResponse';
import {serializeExternalActivity} from './serializeExternalActivity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalActivityCollectionResponse(writer: SerializationWriter, externalActivityCollectionResponse: ExternalActivityCollectionResponse | undefined = {} as ExternalActivityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalActivityCollectionResponse)
        writer.writeCollectionOfObjectValues<ExternalActivity>("value", externalActivityCollectionResponse.value, serializeExternalActivity);
}
