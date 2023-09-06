import { deserializeIntoLifecycleManagementSettings } from './deserializeIntoLifecycleManagementSettings';
import { type LifecycleManagementSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLifecycleManagementSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLifecycleManagementSettings;
}
