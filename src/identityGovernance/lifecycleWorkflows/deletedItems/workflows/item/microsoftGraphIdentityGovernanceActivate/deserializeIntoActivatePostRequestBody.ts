import {createUserFromDiscriminatorValue} from '../../../../../../models/createUserFromDiscriminatorValue';
import {serializeUser} from '../../../../../../models/serializeUser';
import {User} from '../../../../../../models/user';
import {ActivatePostRequestBody} from './activatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActivatePostRequestBody(activatePostRequestBody: ActivatePostRequestBody | undefined = {} as ActivatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "subjects": n => { activatePostRequestBody.subjects = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
    }
}
