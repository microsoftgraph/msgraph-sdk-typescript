import {WindowsPhone81CustomConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81CustomConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsPhone81CustomConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsPhone81CustomConfigurationCollectionResponse();
}
