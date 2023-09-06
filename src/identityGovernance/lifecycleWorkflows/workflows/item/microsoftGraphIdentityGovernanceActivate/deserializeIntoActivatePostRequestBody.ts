import { createUserFromDiscriminatorValue } from '../../../../../models/createUserFromDiscriminatorValue';
import { serializeUser } from '../../../../../models/serializeUser';
import { type User } from '../../../../../models/user';
import { type ActivatePostRequestBody } from './activatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoActivatePostRequestBody(activatePostRequestBody: ActivatePostRequestBody | undefined = {} as ActivatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "subjects": n => { activatePostRequestBody.subjects = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
    }
}
