import {IdentitySet} from './identitySet';
import {Request} from './request';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRequest(writer: SerializationWriter, request: Request | undefined = {} as Request) : void {
        serializeEntity(writer, request)
        writer.writeStringValue("approvalId", request.approvalId);
        writer.writeDateValue("completedDateTime", request.completedDateTime);
        writer.writeObjectValue<IdentitySet>("createdBy", request.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", request.createdDateTime);
        writer.writeStringValue("customData", request.customData);
        writer.writeStringValue("status", request.status);
}
