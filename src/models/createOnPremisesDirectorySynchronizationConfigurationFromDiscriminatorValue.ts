import { deserializeIntoOnPremisesDirectorySynchronizationConfiguration } from './deserializeIntoOnPremisesDirectorySynchronizationConfiguration';
import { type OnPremisesDirectorySynchronizationConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesDirectorySynchronizationConfiguration;
}
