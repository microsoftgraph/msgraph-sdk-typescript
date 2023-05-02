import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {CaseOperation} from './caseOperation';
import {CaseOperationCollectionResponse} from './caseOperationCollectionResponse';
import {createCaseOperationFromDiscriminatorValue} from './createCaseOperationFromDiscriminatorValue';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCaseOperationCollectionResponse(caseOperationCollectionResponse: CaseOperationCollectionResponse | undefined = {} as CaseOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(caseOperationCollectionResponse),
        "value": n => { caseOperationCollectionResponse.value = n.getCollectionOfObjectValues<CaseOperation>(createCaseOperationFromDiscriminatorValue); },
    }
}
