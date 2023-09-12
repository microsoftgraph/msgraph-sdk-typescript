import { createDetailsInfoFromDiscriminatorValue } from './createDetailsInfoFromDiscriminatorValue';
import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type DetailsInfo } from './detailsInfo';
import { type ProvisionedIdentity } from './provisionedIdentity';
import { serializeDetailsInfo } from './serializeDetailsInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionedIdentity(provisionedIdentity: ProvisionedIdentity | undefined = {} as ProvisionedIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisionedIdentity),
        "details": n => { provisionedIdentity.details = n.getObjectValue<DetailsInfo>(createDetailsInfoFromDiscriminatorValue); },
        "identityType": n => { provisionedIdentity.identityType = n.getStringValue(); },
    }
}
