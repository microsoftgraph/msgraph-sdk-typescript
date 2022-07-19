import {AndroidWorkProfileCustomConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidWorkProfileCustomConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidWorkProfileCustomConfiguration();
}
