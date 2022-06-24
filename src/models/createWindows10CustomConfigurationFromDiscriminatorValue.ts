import {Windows10CustomConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10CustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10CustomConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10CustomConfigurationImpl();
}
