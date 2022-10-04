import {AndroidCustomConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidCustomConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidCustomConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidCustomConfigurationCollectionResponse();
}
