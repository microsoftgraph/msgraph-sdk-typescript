import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {CaseOperation} from './caseOperation';
import type {CaseOperationCollectionResponse} from './caseOperationCollectionResponse';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCaseOperationCollectionResponse(writer: SerializationWriter, caseOperationCollectionResponse: CaseOperationCollectionResponse | undefined = {} as CaseOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, caseOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<CaseOperation>("value", caseOperationCollectionResponse.value, serializeCaseOperation);
}
