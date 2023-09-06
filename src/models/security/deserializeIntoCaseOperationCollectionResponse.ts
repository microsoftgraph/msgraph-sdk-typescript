import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { type CaseOperation } from './caseOperation';
import { type CaseOperationCollectionResponse } from './caseOperationCollectionResponse';
import { createCaseOperationFromDiscriminatorValue } from './createCaseOperationFromDiscriminatorValue';
import { serializeCaseOperation } from './serializeCaseOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCaseOperationCollectionResponse(caseOperationCollectionResponse: CaseOperationCollectionResponse | undefined = {} as CaseOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(caseOperationCollectionResponse),
        "value": n => { caseOperationCollectionResponse.value = n.getCollectionOfObjectValues<CaseOperation>(createCaseOperationFromDiscriminatorValue); },
    }
}
