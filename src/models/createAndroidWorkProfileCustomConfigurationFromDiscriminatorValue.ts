import { deserializeIntoAndroidWorkProfileCustomConfiguration } from './deserializeIntoAndroidWorkProfileCustomConfiguration';
import { type AndroidWorkProfileCustomConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidWorkProfileCustomConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidWorkProfileCustomConfiguration;
}
