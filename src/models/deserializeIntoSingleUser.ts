import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {SingleUser} from './singleUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleUser(singleUser: SingleUser | undefined = {} as SingleUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(singleUser),
        "description": n => { singleUser.description = n.getStringValue(); },
        "userId": n => { singleUser.userId = n.getStringValue(); },
    }
}
