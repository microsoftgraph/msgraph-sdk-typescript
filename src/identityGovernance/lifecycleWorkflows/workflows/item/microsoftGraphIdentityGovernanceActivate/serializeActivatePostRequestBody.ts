import {serializeUser} from '../../../../../models/serializeUser';
import {User} from '../../../../../models/user';
import {ActivatePostRequestBody} from './activatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivatePostRequestBody(writer: SerializationWriter, activatePostRequestBody: ActivatePostRequestBody | undefined = {} as ActivatePostRequestBody) : void {
        writer.writeCollectionOfObjectValues<User>("subjects", activatePostRequestBody.subjects, serializeUser);
        writer.writeAdditionalData(activatePostRequestBody.additionalData);
}
