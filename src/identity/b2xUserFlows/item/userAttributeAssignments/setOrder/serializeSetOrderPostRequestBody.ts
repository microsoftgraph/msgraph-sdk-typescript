import { type AssignmentOrder } from '../../../../../models/assignmentOrder';
import { serializeAssignmentOrder } from '../../../../../models/serializeAssignmentOrder';
import { type SetOrderPostRequestBody } from './setOrderPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSetOrderPostRequestBody(writer: SerializationWriter, setOrderPostRequestBody: SetOrderPostRequestBody | undefined = {} as SetOrderPostRequestBody) : void {
        writer.writeObjectValue<AssignmentOrder>("newAssignmentOrder", setOrderPostRequestBody.newAssignmentOrder, serializeAssignmentOrder);
        writer.writeAdditionalData(setOrderPostRequestBody.additionalData);
}
