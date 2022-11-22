import {SharedPCConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedPCConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedPCConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedPCConfigurationCollectionResponse();
}
