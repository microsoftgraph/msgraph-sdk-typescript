import { type RemoveAccessApplyAction } from './removeAccessApplyAction';
import { serializeAccessReviewApplyAction } from './serializeAccessReviewApplyAction';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRemoveAccessApplyAction(writer: SerializationWriter, removeAccessApplyAction: RemoveAccessApplyAction | undefined = {} as RemoveAccessApplyAction) : void {
        serializeAccessReviewApplyAction(writer, removeAccessApplyAction)
}
