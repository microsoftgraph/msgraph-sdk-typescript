import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeServiceHealth } from './serializeServiceHealth';
import { type ServiceHealth } from './serviceHealth';
import { type ServiceHealthCollectionResponse } from './serviceHealthCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeServiceHealthCollectionResponse(writer: SerializationWriter, serviceHealthCollectionResponse: ServiceHealthCollectionResponse | undefined = {} as ServiceHealthCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceHealthCollectionResponse)
        writer.writeCollectionOfObjectValues<ServiceHealth>("value", serviceHealthCollectionResponse.value, serializeServiceHealth);
}
