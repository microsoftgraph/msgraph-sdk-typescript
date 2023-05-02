import {DetailsInfo} from './detailsInfo';
import {ProvisionedIdentity} from './provisionedIdentity';
import {serializeDetailsInfo} from './serializeDetailsInfo';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisionedIdentity(writer: SerializationWriter, provisionedIdentity: ProvisionedIdentity | undefined = {} as ProvisionedIdentity) : void {
        serializeIdentity(writer, provisionedIdentity)
        writer.writeObjectValue<DetailsInfo>("details", provisionedIdentity.details, serializeDetailsInfo);
        writer.writeStringValue("identityType", provisionedIdentity.identityType);
}
