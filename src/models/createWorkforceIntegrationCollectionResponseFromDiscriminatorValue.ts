import {deserializeIntoWorkforceIntegrationCollectionResponse} from './deserializeIntoWorkforceIntegrationCollectionResponse';
import {WorkforceIntegrationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkforceIntegrationCollectionResponse;
}
