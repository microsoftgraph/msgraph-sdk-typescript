import {deserializeIntoOnPremisesDirectorySynchronizationConfiguration} from './deserializeIntoOnPremisesDirectorySynchronizationConfiguration';
import {OnPremisesDirectorySynchronizationConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesDirectorySynchronizationConfiguration;
}
