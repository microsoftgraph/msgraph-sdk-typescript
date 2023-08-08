import {serializeIdentity} from './serializeIdentity';
import type {ServicePrincipalIdentity} from './servicePrincipalIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalIdentity(writer: SerializationWriter, servicePrincipalIdentity: ServicePrincipalIdentity | undefined = {} as ServicePrincipalIdentity) : void {
        serializeIdentity(writer, servicePrincipalIdentity)
        writer.writeStringValue("appId", servicePrincipalIdentity.appId);
}
