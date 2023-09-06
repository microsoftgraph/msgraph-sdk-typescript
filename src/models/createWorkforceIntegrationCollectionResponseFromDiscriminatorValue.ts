import { deserializeIntoWorkforceIntegrationCollectionResponse } from './deserializeIntoWorkforceIntegrationCollectionResponse';
import { type WorkforceIntegrationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkforceIntegrationCollectionResponse;
}
