import {Fido2CombinationConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2CombinationConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fido2CombinationConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fido2CombinationConfigurationCollectionResponse();
}
