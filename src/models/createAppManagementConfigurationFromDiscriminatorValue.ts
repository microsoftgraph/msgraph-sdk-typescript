import {deserializeIntoAppManagementConfiguration} from './deserializeIntoAppManagementConfiguration';
import {AppManagementConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppManagementConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppManagementConfiguration;
}
