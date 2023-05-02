import {Alert} from './alert';
import {AlertCollectionResponse} from './alertCollectionResponse';
import {createAlertFromDiscriminatorValue} from './createAlertFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAlert} from './serializeAlert';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertCollectionResponse(alertCollectionResponse: AlertCollectionResponse | undefined = {} as AlertCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(alertCollectionResponse),
        "value": n => { alertCollectionResponse.value = n.getCollectionOfObjectValues<Alert>(createAlertFromDiscriminatorValue); },
    }
}
