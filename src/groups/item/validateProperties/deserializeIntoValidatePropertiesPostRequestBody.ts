import {ValidatePropertiesPostRequestBody} from './validatePropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoValidatePropertiesPostRequestBody(validatePropertiesPostRequestBody: ValidatePropertiesPostRequestBody | undefined = {} as ValidatePropertiesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { validatePropertiesPostRequestBody.displayName = n.getStringValue(); },
        "mailNickname": n => { validatePropertiesPostRequestBody.mailNickname = n.getStringValue(); },
        "onBehalfOfUserId": n => { validatePropertiesPostRequestBody.onBehalfOfUserId = n.getGuidValue(); },
    }
}
