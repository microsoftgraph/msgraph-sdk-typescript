import {SamlOrWsFedProviderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSamlOrWsFedProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SamlOrWsFedProviderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SamlOrWsFedProviderCollectionResponse();
}
