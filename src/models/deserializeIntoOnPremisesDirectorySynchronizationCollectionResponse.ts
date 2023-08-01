import {createOnPremisesDirectorySynchronizationFromDiscriminatorValue} from './createOnPremisesDirectorySynchronizationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {OnPremisesDirectorySynchronization} from './onPremisesDirectorySynchronization';
import type {OnPremisesDirectorySynchronizationCollectionResponse} from './onPremisesDirectorySynchronizationCollectionResponse';
import {serializeOnPremisesDirectorySynchronization} from './serializeOnPremisesDirectorySynchronization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesDirectorySynchronizationCollectionResponse(onPremisesDirectorySynchronizationCollectionResponse: OnPremisesDirectorySynchronizationCollectionResponse | undefined = {} as OnPremisesDirectorySynchronizationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onPremisesDirectorySynchronizationCollectionResponse),
        "value": n => { onPremisesDirectorySynchronizationCollectionResponse.value = n.getCollectionOfObjectValues<OnPremisesDirectorySynchronization>(createOnPremisesDirectorySynchronizationFromDiscriminatorValue); },
    }
}
