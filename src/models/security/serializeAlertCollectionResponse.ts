import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Alert} from './alert';
import {AlertCollectionResponse} from './alertCollectionResponse';
import {serializeAlert} from './serializeAlert';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertCollectionResponse(alertCollectionResponse: AlertCollectionResponse | undefined = {} as AlertCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, alertCollectionResponse)
        writer.writeCollectionOfObjectValues<Alert>("value", alertCollectionResponse.value, serializeAlert);
}
