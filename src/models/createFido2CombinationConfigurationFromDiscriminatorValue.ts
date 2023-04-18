import {Fido2CombinationConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2CombinationConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fido2CombinationConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fido2CombinationConfiguration();
}
