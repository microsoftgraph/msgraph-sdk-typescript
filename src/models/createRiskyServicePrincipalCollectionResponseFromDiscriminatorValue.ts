import {deserializeIntoRiskyServicePrincipalCollectionResponse} from './deserializeIntoRiskyServicePrincipalCollectionResponse';
import {RiskyServicePrincipalCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyServicePrincipalCollectionResponse;
}
