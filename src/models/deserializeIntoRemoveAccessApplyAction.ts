import {deserializeIntoAccessReviewApplyAction} from './deserializeIntoAccessReviewApplyAction';
import {RemoveAccessApplyAction} from './removeAccessApplyAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveAccessApplyAction(removeAccessApplyAction: RemoveAccessApplyAction | undefined = {} as RemoveAccessApplyAction) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewApplyAction(removeAccessApplyAction),
    }
}
