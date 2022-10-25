import {ManagedAppConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppConfigurationCollectionResponse();
}
