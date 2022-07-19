import {Windows10GeneralConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10GeneralConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10GeneralConfiguration();
}
