import { deserializeIntoFido2CombinationConfiguration } from './deserializeIntoFido2CombinationConfiguration';
import { type Fido2CombinationConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFido2CombinationConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFido2CombinationConfiguration;
}
