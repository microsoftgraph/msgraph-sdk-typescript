import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {ExternalActivity} from './externalActivity';
import {ExternalActivityType} from './externalActivityType';
import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalActivity(externalActivity: ExternalActivity | undefined = {} as ExternalActivity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalActivity),
        "performedBy": n => { externalActivity.performedBy = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "startDateTime": n => { externalActivity.startDateTime = n.getDateValue(); },
        "type": n => { externalActivity.type = n.getEnumValue<ExternalActivityType>(ExternalActivityType); },
    }
}
