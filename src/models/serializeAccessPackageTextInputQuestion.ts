import {AccessPackageTextInputQuestion} from './accessPackageTextInputQuestion';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageTextInputQuestion(writer: SerializationWriter, accessPackageTextInputQuestion: AccessPackageTextInputQuestion | undefined = {} as AccessPackageTextInputQuestion) : void {
        serializeAccessPackageQuestion(writer, accessPackageTextInputQuestion)
        writer.writeBooleanValue("isSingleLineQuestion", accessPackageTextInputQuestion.isSingleLineQuestion);
        writer.writeStringValue("regexPattern", accessPackageTextInputQuestion.regexPattern);
}
