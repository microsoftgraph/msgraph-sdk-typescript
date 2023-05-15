import {IdentitySet} from '../identitySet';
import {ResultInfo} from '../resultInfo';
import {serializeEntity} from '../serializeEntity';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {serializeResultInfo} from '../serializeResultInfo';
import {CaseAction} from './caseAction';
import {CaseOperation} from './caseOperation';
import {CaseOperationStatus} from './caseOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCaseOperation(writer: SerializationWriter, caseOperation: CaseOperation | undefined = {} as CaseOperation) : void {
        serializeEntity(writer, caseOperation)
        writer.writeEnumValue<CaseAction>("action", caseOperation.action);
        writer.writeDateValue("completedDateTime", caseOperation.completedDateTime);
        writer.writeObjectValue<IdentitySet>("createdBy", caseOperation.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", caseOperation.createdDateTime);
        writer.writeNumberValue("percentProgress", caseOperation.percentProgress);
        writer.writeObjectValue<ResultInfo>("resultInfo", caseOperation.resultInfo, serializeResultInfo);
        writer.writeEnumValue<CaseOperationStatus>("status", caseOperation.status);
}
