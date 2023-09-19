import { deserializeIntoMicrosoftStoreForBusinessAppCollectionResponse } from './deserializeIntoMicrosoftStoreForBusinessAppCollectionResponse';
import { type MicrosoftStoreForBusinessAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMicrosoftStoreForBusinessAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftStoreForBusinessAppCollectionResponse;
}
