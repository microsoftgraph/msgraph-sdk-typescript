import {DisableAndDeleteUserApplyAction} from './disableAndDeleteUserApplyAction';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisableAndDeleteUserApplyAction(disableAndDeleteUserApplyAction: DisableAndDeleteUserApplyAction | undefined = {} as DisableAndDeleteUserApplyAction, writer: SerializationWriter) : void {
        serializeAccessReviewApplyAction(writer, disableAndDeleteUserApplyAction)
}
