import {AccessPackageAnswerString} from './accessPackageAnswerString';
import {serializeAccessPackageAnswer} from './serializeAccessPackageAnswer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAnswerString(accessPackageAnswerString: AccessPackageAnswerString | undefined = {} as AccessPackageAnswerString, writer: SerializationWriter) : void {
        serializeAccessPackageAnswer(writer, accessPackageAnswerString)
        writer.writeStringValue("value", accessPackageAnswerString.value);
}
