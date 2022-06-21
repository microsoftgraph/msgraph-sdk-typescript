import {AndroidCustomConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidCustomConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidCustomConfiguration();
}
