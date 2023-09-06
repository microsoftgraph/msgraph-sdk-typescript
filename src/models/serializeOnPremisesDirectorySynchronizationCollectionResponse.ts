import { type OnPremisesDirectorySynchronization } from './onPremisesDirectorySynchronization';
import { type OnPremisesDirectorySynchronizationCollectionResponse } from './onPremisesDirectorySynchronizationCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeOnPremisesDirectorySynchronization } from './serializeOnPremisesDirectorySynchronization';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOnPremisesDirectorySynchronizationCollectionResponse(writer: SerializationWriter, onPremisesDirectorySynchronizationCollectionResponse: OnPremisesDirectorySynchronizationCollectionResponse | undefined = {} as OnPremisesDirectorySynchronizationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onPremisesDirectorySynchronizationCollectionResponse)
        writer.writeCollectionOfObjectValues<OnPremisesDirectorySynchronization>("value", onPremisesDirectorySynchronizationCollectionResponse.value, serializeOnPremisesDirectorySynchronization);
}
