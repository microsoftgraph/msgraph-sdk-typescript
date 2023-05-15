import {DetailsInfo} from './detailsInfo';
import {ProvisioningSystem} from './provisioningSystem';
import {serializeDetailsInfo} from './serializeDetailsInfo';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningSystem(writer: SerializationWriter, provisioningSystem: ProvisioningSystem | undefined = {} as ProvisioningSystem) : void {
        serializeIdentity(writer, provisioningSystem)
        writer.writeObjectValue<DetailsInfo>("details", provisioningSystem.details, serializeDetailsInfo);
}
