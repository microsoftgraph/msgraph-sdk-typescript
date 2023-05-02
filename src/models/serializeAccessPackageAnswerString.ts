import {AccessPackageAnswerString} from './accessPackageAnswerString';
import {serializeAccessPackageAnswer} from './serializeAccessPackageAnswer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAnswerString(writer: SerializationWriter, accessPackageAnswerString: AccessPackageAnswerString | undefined = {} as AccessPackageAnswerString) : void {
        serializeAccessPackageAnswer(writer, accessPackageAnswerString)
        writer.writeStringValue("value", accessPackageAnswerString.value);
}
