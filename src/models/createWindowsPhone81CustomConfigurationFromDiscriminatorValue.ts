import { deserializeIntoWindowsPhone81CustomConfiguration } from './deserializeIntoWindowsPhone81CustomConfiguration';
import { type WindowsPhone81CustomConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsPhone81CustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsPhone81CustomConfiguration;
}
