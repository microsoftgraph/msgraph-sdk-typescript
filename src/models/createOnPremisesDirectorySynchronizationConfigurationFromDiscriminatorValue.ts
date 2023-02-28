import {OnPremisesDirectorySynchronizationConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesDirectorySynchronizationConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesDirectorySynchronizationConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesDirectorySynchronizationConfiguration();
}
