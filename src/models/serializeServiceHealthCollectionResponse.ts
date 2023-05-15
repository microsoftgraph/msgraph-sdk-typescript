import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceHealth} from './serializeServiceHealth';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthCollectionResponse} from './serviceHealthCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthCollectionResponse(writer: SerializationWriter, serviceHealthCollectionResponse: ServiceHealthCollectionResponse | undefined = {} as ServiceHealthCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceHealthCollectionResponse)
        writer.writeCollectionOfObjectValues<ServiceHealth>("value", serviceHealthCollectionResponse.value, serializeServiceHealth);
}
