import { createDetailsInfoFromDiscriminatorValue } from './createDetailsInfoFromDiscriminatorValue';
import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type DetailsInfo } from './detailsInfo';
import { type ProvisioningSystem } from './provisioningSystem';
import { serializeDetailsInfo } from './serializeDetailsInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningSystem(provisioningSystem: ProvisioningSystem | undefined = {} as ProvisioningSystem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisioningSystem),
        "details": n => { provisioningSystem.details = n.getObjectValue<DetailsInfo>(createDetailsInfoFromDiscriminatorValue); },
    }
}
