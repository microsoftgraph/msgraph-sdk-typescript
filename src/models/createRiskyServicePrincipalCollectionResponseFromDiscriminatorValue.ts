import { deserializeIntoRiskyServicePrincipalCollectionResponse } from './deserializeIntoRiskyServicePrincipalCollectionResponse';
import { type RiskyServicePrincipalCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyServicePrincipalCollectionResponse;
}
