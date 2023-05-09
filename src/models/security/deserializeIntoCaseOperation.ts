import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {createResultInfoFromDiscriminatorValue} from '../createResultInfoFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {IdentitySet} from '../identitySet';
import {ResultInfo} from '../resultInfo';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {serializeResultInfo} from '../serializeResultInfo';
import {CaseAction} from './caseAction';
import {CaseOperation} from './caseOperation';
import {CaseOperationStatus} from './caseOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
