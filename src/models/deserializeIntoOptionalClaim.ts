import { type OptionalClaim } from './optionalClaim';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOptionalClaim(optionalClaim: OptionalClaim | undefined = {} as OptionalClaim) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalProperties": n => { optionalClaim.additionalProperties = n.getCollectionOfPrimitiveValues<string>(); },
        "essential": n => { optionalClaim.essential = n.getBooleanValue(); },
        "name": n => { optionalClaim.name = n.getStringValue(); },
        "@odata.type": n => { optionalClaim.odataType = n.getStringValue(); },
        "source": n => { optionalClaim.source = n.getStringValue(); },
    }
}
