import {RemoveAccessApplyAction} from './removeAccessApplyAction';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveAccessApplyAction(writer: SerializationWriter, removeAccessApplyAction: RemoveAccessApplyAction | undefined = {} as RemoveAccessApplyAction) : void {
        serializeAccessReviewApplyAction(writer, removeAccessApplyAction)
}
