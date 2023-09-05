import { type DetailsInfo } from './detailsInfo';
import { type ProvisioningSystem } from './provisioningSystem';
import { serializeDetailsInfo } from './serializeDetailsInfo';
import { serializeIdentity } from './serializeIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProvisioningSystem(writer: SerializationWriter, provisioningSystem: ProvisioningSystem | undefined = {} as ProvisioningSystem) : void {
        serializeIdentity(writer, provisioningSystem)
        writer.writeObjectValue<DetailsInfo>("details", provisioningSystem.details, serializeDetailsInfo);
}
