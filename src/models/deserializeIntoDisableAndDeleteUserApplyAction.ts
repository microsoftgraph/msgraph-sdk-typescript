import { deserializeIntoAccessReviewApplyAction } from './deserializeIntoAccessReviewApplyAction';
import { type DisableAndDeleteUserApplyAction } from './disableAndDeleteUserApplyAction';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDisableAndDeleteUserApplyAction(disableAndDeleteUserApplyAction: DisableAndDeleteUserApplyAction | undefined = {} as DisableAndDeleteUserApplyAction) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewApplyAction(disableAndDeleteUserApplyAction),
    }
}
