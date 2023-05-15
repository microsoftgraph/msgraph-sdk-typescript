import {deserializeIntoWindowsPhone81CustomConfiguration} from './deserializeIntoWindowsPhone81CustomConfiguration';
import {WindowsPhone81CustomConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81CustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsPhone81CustomConfiguration;
}
