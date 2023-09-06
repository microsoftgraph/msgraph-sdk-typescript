import { createIdentitySetFromDiscriminatorValue } from '../createIdentitySetFromDiscriminatorValue';
import { createResultInfoFromDiscriminatorValue } from '../createResultInfoFromDiscriminatorValue';
import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type IdentitySet } from '../identitySet';
import { type ResultInfo } from '../resultInfo';
import { serializeIdentitySet } from '../serializeIdentitySet';
import { serializeResultInfo } from '../serializeResultInfo';
import { CaseAction } from './caseAction';
import { type CaseOperation } from './caseOperation';
import { CaseOperationStatus } from './caseOperationStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCaseOperation(caseOperation: CaseOperation | undefined = {} as CaseOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(caseOperation),
        "action": n => { caseOperation.action = n.getEnumValue<CaseAction>(CaseAction); },
        "completedDateTime": n => { caseOperation.completedDateTime = n.getDateValue(); },
        "createdBy": n => { caseOperation.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { caseOperation.createdDateTime = n.getDateValue(); },
        "percentProgress": n => { caseOperation.percentProgress = n.getNumberValue(); },
        "resultInfo": n => { caseOperation.resultInfo = n.getObjectValue<ResultInfo>(createResultInfoFromDiscriminatorValue); },
        "status": n => { caseOperation.status = n.getEnumValue<CaseOperationStatus>(CaseOperationStatus); },
    }
}
