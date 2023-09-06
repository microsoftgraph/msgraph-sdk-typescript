import { deserializeIntoWindowsUpdateForBusinessConfiguration } from './deserializeIntoWindowsUpdateForBusinessConfiguration';
import { type WindowsUpdateForBusinessConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsUpdateForBusinessConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUpdateForBusinessConfiguration;
}
