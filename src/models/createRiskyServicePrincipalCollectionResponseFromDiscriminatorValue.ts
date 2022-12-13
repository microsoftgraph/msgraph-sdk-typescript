import {RiskyServicePrincipalCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyServicePrincipalCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyServicePrincipalCollectionResponse();
}
