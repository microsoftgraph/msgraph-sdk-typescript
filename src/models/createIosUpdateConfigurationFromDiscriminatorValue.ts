import { deserializeIntoIosUpdateConfiguration } from './deserializeIntoIosUpdateConfiguration';
import { type IosUpdateConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosUpdateConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosUpdateConfiguration;
}
