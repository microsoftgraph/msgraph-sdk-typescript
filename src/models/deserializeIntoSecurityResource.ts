import {SecurityResource} from './securityResource';
import {SecurityResourceType} from './securityResourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityResource(securityResource: SecurityResource | undefined = {} as SecurityResource) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { securityResource.odataType = n.getStringValue(); },
        "resource": n => { securityResource.resource = n.getStringValue(); },
        "resourceType": n => { securityResource.resourceType = n.getEnumValue<SecurityResourceType>(SecurityResourceType); },
    }
}
