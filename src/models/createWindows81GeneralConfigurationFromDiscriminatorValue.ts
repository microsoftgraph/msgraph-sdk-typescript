import {Windows81GeneralConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows81GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows81GeneralConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows81GeneralConfigurationImpl();
}
