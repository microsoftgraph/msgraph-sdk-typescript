import {deserializeIntoOnPremisesDirectorySynchronizationCollectionResponse} from './deserializeIntoOnPremisesDirectorySynchronizationCollectionResponse';
import {OnPremisesDirectorySynchronizationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesDirectorySynchronizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesDirectorySynchronizationCollectionResponse;
}
