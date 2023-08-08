import type {DisableAndDeleteUserApplyAction} from './disableAndDeleteUserApplyAction';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisableAndDeleteUserApplyAction(writer: SerializationWriter, disableAndDeleteUserApplyAction: DisableAndDeleteUserApplyAction | undefined = {} as DisableAndDeleteUserApplyAction) : void {
        serializeAccessReviewApplyAction(writer, disableAndDeleteUserApplyAction)
}
