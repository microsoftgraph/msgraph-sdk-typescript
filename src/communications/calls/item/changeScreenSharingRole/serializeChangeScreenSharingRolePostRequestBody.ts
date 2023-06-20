import {ScreenSharingRole} from '../../../../models/screenSharingRole';
import {ChangeScreenSharingRolePostRequestBody} from './changeScreenSharingRolePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangeScreenSharingRolePostRequestBody(changeScreenSharingRolePostRequestBody: ChangeScreenSharingRolePostRequestBody | undefined = {} as ChangeScreenSharingRolePostRequestBody, writer: SerializationWriter) : void {
        writer.writeEnumValue<ScreenSharingRole>("role", changeScreenSharingRolePostRequestBody.role);
        writer.writeAdditionalData(changeScreenSharingRolePostRequestBody.additionalData);
}
