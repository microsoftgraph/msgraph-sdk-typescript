import {AssignmentOrder} from '../../../../../models/assignmentOrder';
import {serializeAssignmentOrder} from '../../../../../models/serializeAssignmentOrder';
import {SetOrderPostRequestBody} from './setOrderPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetOrderPostRequestBody(writer: SerializationWriter, setOrderPostRequestBody: SetOrderPostRequestBody | undefined = {} as SetOrderPostRequestBody) : void {
        writer.writeObjectValue<AssignmentOrder>("newAssignmentOrder", setOrderPostRequestBody.newAssignmentOrder, serializeAssignmentOrder);
        writer.writeAdditionalData(setOrderPostRequestBody.additionalData);
}
