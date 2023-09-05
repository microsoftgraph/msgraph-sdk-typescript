import { serializeUser } from '../../../../../models/serializeUser';
import { type User } from '../../../../../models/user';
import { type ActivatePostRequestBody } from './activatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeActivatePostRequestBody(writer: SerializationWriter, activatePostRequestBody: ActivatePostRequestBody | undefined = {} as ActivatePostRequestBody) : void {
        writer.writeCollectionOfObjectValues<User>("subjects", activatePostRequestBody.subjects, serializeUser);
        writer.writeAdditionalData(activatePostRequestBody.additionalData);
}
