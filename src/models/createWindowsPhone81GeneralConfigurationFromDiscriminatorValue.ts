import {deserializeIntoWindowsPhone81GeneralConfiguration} from './deserializeIntoWindowsPhone81GeneralConfiguration';
import {WindowsPhone81GeneralConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsPhone81GeneralConfiguration;
}
