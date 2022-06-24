import {Windows10TeamGeneralConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10TeamGeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10TeamGeneralConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10TeamGeneralConfigurationImpl();
}
