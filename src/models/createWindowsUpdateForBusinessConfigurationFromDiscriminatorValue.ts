import {deserializeIntoWindowsUpdateForBusinessConfiguration} from './deserializeIntoWindowsUpdateForBusinessConfiguration';
import {WindowsUpdateForBusinessConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUpdateForBusinessConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUpdateForBusinessConfiguration;
}
