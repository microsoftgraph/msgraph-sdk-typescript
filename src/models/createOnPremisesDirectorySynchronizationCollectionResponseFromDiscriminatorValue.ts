import { deserializeIntoOnPremisesDirectorySynchronizationCollectionResponse } from './deserializeIntoOnPremisesDirectorySynchronizationCollectionResponse';
import { type OnPremisesDirectorySynchronizationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnPremisesDirectorySynchronizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesDirectorySynchronizationCollectionResponse;
}
