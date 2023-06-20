import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {CaseOperation} from './caseOperation';
import {CaseOperationCollectionResponse} from './caseOperationCollectionResponse';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCaseOperationCollectionResponse(caseOperationCollectionResponse: CaseOperationCollectionResponse | undefined = {} as CaseOperationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, caseOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<CaseOperation>("value", caseOperationCollectionResponse.value, serializeCaseOperation);
}
