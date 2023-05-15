import {DisableAndDeleteUserApplyAction} from './disableAndDeleteUserApplyAction';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisableAndDeleteUserApplyAction(writer: SerializationWriter, disableAndDeleteUserApplyAction: DisableAndDeleteUserApplyAction | undefined = {} as DisableAndDeleteUserApplyAction) : void {
        serializeAccessReviewApplyAction(writer, disableAndDeleteUserApplyAction)
}
