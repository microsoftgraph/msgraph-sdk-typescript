import {RegistryKeyStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistryKeyStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegistryKeyStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegistryKeyStateCollectionResponse();
}
