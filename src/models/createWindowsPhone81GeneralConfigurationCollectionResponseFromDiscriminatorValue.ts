import {WindowsPhone81GeneralConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81GeneralConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsPhone81GeneralConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsPhone81GeneralConfigurationCollectionResponse();
}
