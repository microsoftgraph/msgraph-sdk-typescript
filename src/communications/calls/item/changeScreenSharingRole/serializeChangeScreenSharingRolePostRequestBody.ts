import { ScreenSharingRole } from '../../../../models/screenSharingRole';
import { type ChangeScreenSharingRolePostRequestBody } from './changeScreenSharingRolePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChangeScreenSharingRolePostRequestBody(writer: SerializationWriter, changeScreenSharingRolePostRequestBody: ChangeScreenSharingRolePostRequestBody | undefined = {} as ChangeScreenSharingRolePostRequestBody) : void {
        writer.writeEnumValue<ScreenSharingRole>("role", changeScreenSharingRolePostRequestBody.role);
        writer.writeAdditionalData(changeScreenSharingRolePostRequestBody.additionalData);
}
