import {Windows10TeamGeneralConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10TeamGeneralConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10TeamGeneralConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10TeamGeneralConfigurationCollectionResponse();
}
