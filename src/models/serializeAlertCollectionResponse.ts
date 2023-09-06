import { type Alert } from './alert';
import { type AlertCollectionResponse } from './alertCollectionResponse';
import { serializeAlert } from './serializeAlert';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAlertCollectionResponse(writer: SerializationWriter, alertCollectionResponse: AlertCollectionResponse | undefined = {} as AlertCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, alertCollectionResponse)
        writer.writeCollectionOfObjectValues<Alert>("value", alertCollectionResponse.value, serializeAlert);
}
