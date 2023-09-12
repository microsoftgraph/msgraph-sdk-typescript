import { deserializeIntoAndroidCustomConfiguration } from './deserializeIntoAndroidCustomConfiguration';
import { type AndroidCustomConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidCustomConfiguration;
}
