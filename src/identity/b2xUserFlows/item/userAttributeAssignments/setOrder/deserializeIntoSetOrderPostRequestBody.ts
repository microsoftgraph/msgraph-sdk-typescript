import type {AssignmentOrder} from '../../../../../models/assignmentOrder';
import {createAssignmentOrderFromDiscriminatorValue} from '../../../../../models/createAssignmentOrderFromDiscriminatorValue';
import {serializeAssignmentOrder} from '../../../../../models/serializeAssignmentOrder';
import type {SetOrderPostRequestBody} from './setOrderPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetOrderPostRequestBody(setOrderPostRequestBody: SetOrderPostRequestBody | undefined = {} as SetOrderPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "newAssignmentOrder": n => { setOrderPostRequestBody.newAssignmentOrder = n.getObjectValue<AssignmentOrder>(createAssignmentOrderFromDiscriminatorValue); },
    }
}
