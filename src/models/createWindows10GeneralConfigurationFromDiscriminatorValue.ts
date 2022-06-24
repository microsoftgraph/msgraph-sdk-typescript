import {Windows10GeneralConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10GeneralConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10GeneralConfigurationImpl();
}
