import {deserializeIntoAuthenticationCombinationConfigurationCollectionResponse} from './deserializeIntoAuthenticationCombinationConfigurationCollectionResponse';
import {AuthenticationCombinationConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationCombinationConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationCombinationConfigurationCollectionResponse;
}
