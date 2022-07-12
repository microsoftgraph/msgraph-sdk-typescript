import {Windows10TeamGeneralConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10TeamGeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10TeamGeneralConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10TeamGeneralConfiguration();
}
