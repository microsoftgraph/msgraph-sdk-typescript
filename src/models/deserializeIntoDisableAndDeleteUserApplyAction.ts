import {deserializeIntoAccessReviewApplyAction} from './deserializeIntoAccessReviewApplyAction';
import {DisableAndDeleteUserApplyAction} from './disableAndDeleteUserApplyAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDisableAndDeleteUserApplyAction(disableAndDeleteUserApplyAction: DisableAndDeleteUserApplyAction | undefined = {} as DisableAndDeleteUserApplyAction) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewApplyAction(disableAndDeleteUserApplyAction),
    }
}
