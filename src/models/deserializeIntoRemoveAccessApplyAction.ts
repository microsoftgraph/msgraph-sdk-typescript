import { deserializeIntoAccessReviewApplyAction } from './deserializeIntoAccessReviewApplyAction';
import { type RemoveAccessApplyAction } from './removeAccessApplyAction';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveAccessApplyAction(removeAccessApplyAction: RemoveAccessApplyAction | undefined = {} as RemoveAccessApplyAction) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewApplyAction(removeAccessApplyAction),
    }
}
