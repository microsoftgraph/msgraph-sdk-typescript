import {MacOSCustomConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSCustomConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSCustomConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSCustomConfigurationCollectionResponse();
}
