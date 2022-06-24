import {AndroidWorkProfileCustomConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileCustomConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileCustomConfigurationImpl();
}
