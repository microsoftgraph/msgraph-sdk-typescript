import { deserializeIntoSubjectSet } from './deserializeIntoSubjectSet';
import { type SingleUser } from './singleUser';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleUser(singleUser: SingleUser | undefined = {} as SingleUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(singleUser),
        "description": n => { singleUser.description = n.getStringValue(); },
        "userId": n => { singleUser.userId = n.getStringValue(); },
    }
}
