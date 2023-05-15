import {SecurityResource} from './securityResource';
import {SecurityResourceType} from './securityResourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityResource(writer: SerializationWriter, securityResource: SecurityResource | undefined = {} as SecurityResource) : void {
        writer.writeStringValue("@odata.type", securityResource.odataType);
        writer.writeStringValue("resource", securityResource.resource);
        writer.writeEnumValue<SecurityResourceType>("resourceType", securityResource.resourceType);
        writer.writeAdditionalData(securityResource.additionalData);
}
