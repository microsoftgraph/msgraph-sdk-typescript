import {serializeIdentity} from './serializeIdentity';
import {ServicePrincipalIdentity} from './servicePrincipalIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalIdentity(writer: SerializationWriter, servicePrincipalIdentity: ServicePrincipalIdentity | undefined = {} as ServicePrincipalIdentity) : void {
        serializeIdentity(writer, servicePrincipalIdentity)
        writer.writeStringValue("appId", servicePrincipalIdentity.appId);
}
