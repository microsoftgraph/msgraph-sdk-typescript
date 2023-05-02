import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {DetailsInfo} from './detailsInfo';
import {ProvisioningSystem} from './provisioningSystem';
import {serializeDetailsInfo} from './serializeDetailsInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningSystem(provisioningSystem: ProvisioningSystem | undefined = {} as ProvisioningSystem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisioningSystem),
        "details": n => { provisioningSystem.details = n.getObjectValue<DetailsInfo>(createDetailsInfoFromDiscriminatorValue); },
    }
}
