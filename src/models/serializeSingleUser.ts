import {serializeSubjectSet} from './serializeSubjectSet';
import {SingleUser} from './singleUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSingleUser(writer: SerializationWriter, singleUser: SingleUser | undefined = {} as SingleUser) : void {
        serializeSubjectSet(writer, singleUser)
        writer.writeStringValue("description", singleUser.description);
        writer.writeStringValue("userId", singleUser.userId);
}
