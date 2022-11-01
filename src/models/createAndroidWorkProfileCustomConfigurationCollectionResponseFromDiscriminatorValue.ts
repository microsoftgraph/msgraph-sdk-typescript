import {AndroidWorkProfileCustomConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileCustomConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileCustomConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileCustomConfigurationCollectionResponse();
}
