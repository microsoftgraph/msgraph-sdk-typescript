import {Windows81GeneralConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows81GeneralConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows81GeneralConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows81GeneralConfigurationCollectionResponse();
}
