import {Windows10GeneralConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10GeneralConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10GeneralConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10GeneralConfigurationCollectionResponse();
}
