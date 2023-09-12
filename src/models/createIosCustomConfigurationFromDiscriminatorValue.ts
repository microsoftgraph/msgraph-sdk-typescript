import { deserializeIntoIosCustomConfiguration } from './deserializeIntoIosCustomConfiguration';
import { type IosCustomConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosCustomConfiguration;
}
