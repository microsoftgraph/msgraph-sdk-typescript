import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { createIdentityFromDiscriminatorValue } from './createIdentityFromDiscriminatorValue';
import { type ExternalActivity } from './externalActivity';
import { ExternalActivityType } from './externalActivityType';
import { type Identity } from './identity';
import { serializeIdentity } from './serializeIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalActivity(externalActivity: ExternalActivity | undefined = {} as ExternalActivity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalActivity),
        "performedBy": n => { externalActivity.performedBy = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "startDateTime": n => { externalActivity.startDateTime = n.getDateValue(); },
        "type": n => { externalActivity.type = n.getEnumValue<ExternalActivityType>(ExternalActivityType); },
    }
}
