import {OnenoteOperation} from './onenoteOperation';
import {OnenoteOperationCollectionResponse} from './onenoteOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnenoteOperation} from './serializeOnenoteOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteOperationCollectionResponse(writer: SerializationWriter, onenoteOperationCollectionResponse: OnenoteOperationCollectionResponse | undefined = {} as OnenoteOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenoteOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<OnenoteOperation>("value", onenoteOperationCollectionResponse.value, serializeOnenoteOperation);
}
