import { deserializeIntoWindowsPhone81GeneralConfiguration } from './deserializeIntoWindowsPhone81GeneralConfiguration';
import { type WindowsPhone81GeneralConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsPhone81GeneralConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsPhone81GeneralConfiguration;
}
