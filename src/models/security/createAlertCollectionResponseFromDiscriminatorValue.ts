import { deserializeIntoAlertCollectionResponse } from './deserializeIntoAlertCollectionResponse';
import { type AlertCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAlertCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlertCollectionResponse;
}
