import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {DetailsInfo} from './detailsInfo';
import {ProvisionedIdentity} from './provisionedIdentity';
import {serializeDetailsInfo} from './serializeDetailsInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionedIdentity(provisionedIdentity: ProvisionedIdentity | undefined = {} as ProvisionedIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisionedIdentity),
        "details": n => { provisionedIdentity.details = n.getObjectValue<DetailsInfo>(createDetailsInfoFromDiscriminatorValue); },
        "identityType": n => { provisionedIdentity.identityType = n.getStringValue(); },
    }
}
