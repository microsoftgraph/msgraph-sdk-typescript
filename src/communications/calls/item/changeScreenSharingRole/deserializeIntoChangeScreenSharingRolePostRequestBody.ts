import { ScreenSharingRole } from '../../../../models/screenSharingRole';
import { type ChangeScreenSharingRolePostRequestBody } from './changeScreenSharingRolePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChangeScreenSharingRolePostRequestBody(changeScreenSharingRolePostRequestBody: ChangeScreenSharingRolePostRequestBody | undefined = {} as ChangeScreenSharingRolePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "role": n => { changeScreenSharingRolePostRequestBody.role = n.getEnumValue<ScreenSharingRole>(ScreenSharingRole); },
    }
}
