import {Windows81GeneralConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows81GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows81GeneralConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows81GeneralConfiguration();
}
