import {WindowsUpdateForBusinessConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateForBusinessConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUpdateForBusinessConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUpdateForBusinessConfigurationCollectionResponse();
}
