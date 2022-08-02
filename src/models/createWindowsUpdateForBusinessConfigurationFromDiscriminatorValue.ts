import {WindowsUpdateForBusinessConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateForBusinessConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUpdateForBusinessConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUpdateForBusinessConfiguration();
}
