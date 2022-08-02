import {Windows10CustomConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10CustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10CustomConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10CustomConfiguration();
}
