import { deserializeIntoWindows10CustomConfiguration } from './deserializeIntoWindows10CustomConfiguration';
import { type Windows10CustomConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindows10CustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10CustomConfiguration;
}
